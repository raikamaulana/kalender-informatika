"use strict";

(() => {
  const TIME_ZONE = "Asia/Jakarta";
  const MOBILE_BREAKPOINT = 768;

  const state = {
    calendar: null,
    selectedDate: null,
    activeRangeStart: null,
    activeRangeEnd: null,
    lastFocusedElement: null
  };

  const elements = {};

  document.addEventListener("DOMContentLoaded", initializeCalendarPage);

  function initializeCalendarPage() {
    cacheElements();

    if (!elements.calendar || typeof FullCalendar === "undefined") {
      console.error("FullCalendar gagal dimuat atau elemen #calendar tidak tersedia.");
      return;
    }

    renderUpcomingEvents();
    initializeFullCalendar();
    bindStaticEvents();
    updateResponsiveCalendarOptions();
  }

  function cacheElements() {
    elements.calendar = document.getElementById("calendar");
    elements.calendarSwipeArea = document.getElementById("calendarSwipeArea");
    elements.calendarPrevious = document.getElementById("calendarPrevious");
    elements.calendarNext = document.getElementById("calendarNext");
    elements.calendarToday = document.getElementById("calendarToday");
    elements.calendarCurrentTitle = document.getElementById("calendarCurrentTitle");

    elements.upcomingEvents = document.getElementById("upcomingEvents");
    elements.upcomingEmpty = document.getElementById("upcomingEmpty");
    elements.upcomingPrevious = document.getElementById("upcomingPrevious");
    elements.upcomingNext = document.getElementById("upcomingNext");

    elements.agendaPanelEyebrow = document.getElementById("eyebrow");
    elements.agendaPanelTitle = document.getElementById("agenda-panel-title");
    elements.agendaPanelList = document.getElementById("agendaPanelList");
    elements.agendaPanelEmpty = document.getElementById("agendaPanelEmpty");

    elements.eventDialog = document.getElementById("eventDialog");
    elements.eventDialogClose = document.getElementById("eventDialogClose");
    elements.eventDialogSecondaryClose = document.getElementById("eventDialogSecondaryClose");
    elements.eventDialogImage = document.getElementById("eventDialogImage");
    elements.eventDialogCategory = document.getElementById("eventDialogCategory");
    elements.eventDialogTitle = document.getElementById("eventDialogTitle");
    elements.eventDialogOrganizer = document.getElementById("eventDialogOrganizer");

    // elements.eventDialogDate = document.getElementById("eventDialogDate");
    // elements.eventDialogTime = document.getElementById("eventDialogTime");
    // elements.eventDialogDescription = document.getElementById("eventDialogDescription");

    elements.eventDialogDateTime = document.getElementById("eventDialogDateTime");
    elements.eventDialogLocation = document.getElementById("eventDialogLocation");
    elements.eventDialogContent = document.getElementById("eventDialogContent");

    elements.eventDialogLocation = document.getElementById("eventDialogLocation");
    elements.eventDialogLink = document.getElementById("eventDialogLink");
  }

  function initializeFullCalendar() {
    const fullCalendarEvents = calendarEvents.map(toFullCalendarEvent);

    state.calendar = new FullCalendar.Calendar(elements.calendar, {
      locale: "id",
      timeZone: "local",
      firstDay: 1,
      initialView: "dayGridMonth",
      headerToolbar: false,
      fixedWeekCount: false,
      showNonCurrentDates: true,
      dayMaxEvents: 2,
      displayEventTime: true,
      eventTimeFormat: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      },
      dayHeaderFormat: { weekday: "short" },
      titleFormat: { year: "numeric", month: "long" },
      events: fullCalendarEvents,

      datesSet(info) {
        const activeMonth = startOfDay(info.view.currentStart);
        const today = startOfDay(new Date());

        elements.calendarCurrentTitle.textContent =
          formatMonthYear(activeMonth);

        state.selectedDate = null;
        clearSelectedDayHighlight();
        if (isSameMonth(activeMonth, today)) {
          state.selectedDate = today;
          renderAgendaPanelForDate(today);
          requestAnimationFrame(() => {
            const todayCell = elements.calendar.querySelector(
              `[data-date="${toDateKey(today)}"]`
            );

            if (todayCell) {
              setSelectedDayHighlight(todayCell);
            }
          });
          return;
        }

        renderAgendaPanelForMonth(activeMonth);
      },

      dateClick(info) {
        state.selectedDate = parseDateInput(info.dateStr);
        setSelectedDayHighlight(info.dayEl);
        renderAgendaPanelForDate(state.selectedDate);
      },

      eventClick(info) {
        info.jsEvent.preventDefault();
        const eventData = findEventById(info.event.id);
        if (eventData) openEventDialog(eventData, info.el);
      },

      eventDidMount(info) {
        const category = categoryConfig[info.event.extendedProps.category];
        const eventData = findEventById(info.event.id);
        const eventElement = info.el;

        eventElement.style.setProperty("--event-color", category.color);
        eventElement.setAttribute("tabindex", "0");
        eventElement.setAttribute("role", "button");
        eventElement.setAttribute(
          "aria-label",
          `${info.event.title}, ${formatDate(eventData.start)}, ${formatTimeRange(eventData.start, eventData.end)}`
        );

        eventElement.addEventListener("keydown", (keyboardEvent) => {
          if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
            keyboardEvent.preventDefault();
            openEventDialog(eventData, eventElement);
          }
        });
      },

      dayCellDidMount(info) {
        info.el.dataset.date = toDateKey(info.date);
        renderMobileDots(info.el, info.date);
      },

      moreLinkContent(args) {
        return `+${args.num} agenda lainnya`;
      },

      moreLinkClick() {
        return "popover";
      },

      eventContent(arg) {
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        const category = categoryConfig[arg.event.extendedProps.category];

        if (isMobile) {
          return {
            html: `<span class="mobile-event-dot" style="--event-color:${escapeHtml(category.color)}" aria-hidden="true"></span>`
          };
        }

        const timeText = arg.timeText ? `<span class="fc-custom-event__time">${escapeHtml(arg.timeText)}</span>` : "";
        return {
          html: `<span class="fc-custom-event" style="--event-color:${escapeHtml(category.color)}">
            <span class="fc-custom-event__title">${escapeHtml(arg.event.title)}</span>
            ${timeText}
          </span>`
        };
      },

      windowResize() {
        updateResponsiveCalendarOptions();
      }
    });

    state.calendar.render();
  }

  function toFullCalendarEvent(event) {
    const category = getCategory(event.category);
    return {
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      backgroundColor: category.color,
      borderColor: category.color,
      textColor: "#F8F7EE",
      extendedProps: {
        category: event.category,
        organizer: event.organizer,
        location: event.location,
        description: event.description,
        timeLabel: event.timeLabel,
        dialogContent: event.dialogContent,
        image: event.image,
        link: event.link,
        featured: event.featured
      }
    };
  }

  function updateResponsiveCalendarOptions() {
    if (!state.calendar) return;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    state.calendar.batchRendering(() => {
      state.calendar.setOption("dayMaxEvents", isMobile ? false : 2);
      state.calendar.setOption("height", "auto");
    });

    state.calendar.rerenderEvents();
  }

  function bindStaticEvents() {
    elements.calendarPrevious.addEventListener("click", () => state.calendar.prev());
    elements.calendarNext.addEventListener("click", () => state.calendar.next());
    elements.calendarToday.addEventListener("click", () => state.calendar.today());

    elements.upcomingPrevious.addEventListener("click", () => scrollUpcoming(-1));
    elements.upcomingNext.addEventListener("click", () => scrollUpcoming(1));
    elements.upcomingEvents.addEventListener("click", handleEventTriggerClick);
    elements.upcomingEvents.addEventListener(
      "scroll",
      updateUpcomingNavigation,
      { passive: true }
    );
    window.addEventListener("resize", updateUpcomingNavigation);

    elements.agendaPanelList.addEventListener("click", handleEventTriggerClick);

    elements.eventDialogClose.addEventListener("click", closeEventDialog);
    elements.eventDialogSecondaryClose.addEventListener("click", closeEventDialog);
    elements.eventDialog.addEventListener("click", (event) => {
      if (event.target === elements.eventDialog) closeEventDialog();
    });
    elements.eventDialog.addEventListener("close", restoreDialogFocus);

    bindCalendarSwipe();
  }

  function bindCalendarSwipe() {
    let pointerStartX = 0;
    let pointerStartY = 0;
    let tracking = false;

    elements.calendarSwipeArea.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse") return;
      tracking = true;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
    }, { passive: true });

    elements.calendarSwipeArea.addEventListener("pointerup", (event) => {
      if (!tracking || window.innerWidth >= MOBILE_BREAKPOINT) return;
      tracking = false;

      const deltaX = event.clientX - pointerStartX;
      const deltaY = event.clientY - pointerStartY;

      if (Math.abs(deltaX) < 55 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
      deltaX < 0 ? state.calendar.next() : state.calendar.prev();
    }, { passive: true });

    elements.calendarSwipeArea.addEventListener("pointercancel", () => {
      tracking = false;
    }, { passive: true });
  }

  function renderUpcomingEvents() {
    // const now = new Date();
    // const upcoming = calendarEvents
    //   .filter((event) => parseDateInput(event.end || event.start) >= now)
    //   .sort((first, second) => {
    //     const dateDifference = parseDateInput(first.start) - parseDateInput(second.start);
    //     if (dateDifference !== 0) return dateDifference;
    //     return Number(second.featured) - Number(first.featured);
    //   })
    //   .slice(0, 3);

    // elements.upcomingEvents.replaceChildren();
    // elements.upcomingEmpty.hidden = upcoming.length > 0;

    // upcoming.forEach((event) => {
    //   elements.upcomingEvents.appendChild(createUpcomingCard(event));
    // });

    const today = startOfDay(new Date());

    const upcoming = calendarEvents
      .filter((event) => {
        const eventEnd = parseDateInput(event.end || event.start);
        return eventEnd >= today;
      })
      .sort((first, second) => {
        const dateDifference =
          parseDateInput(first.start) - parseDateInput(second.start);

        if (dateDifference !== 0) return dateDifference;

        return Number(second.featured) - Number(first.featured);
      });

    elements.upcomingEvents.replaceChildren();
    elements.upcomingEmpty.hidden = upcoming.length > 0;

    upcoming.forEach((event) => {
      elements.upcomingEvents.appendChild(createUpcomingCard(event));
    });

    requestAnimationFrame(updateUpcomingNavigation);
  }

  function createUpcomingCard(event) {
    const category = getCategory(event.category);
    const start = parseDateInput(event.start);
    const article = document.createElement("article");
    article.className = "upcoming-card";
    article.dataset.eventId = event.id;
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-label", `Buka detail ${event.title}`);

    const imageStyle = event.image
      ? `background-image:linear-gradient(180deg,rgba(4,27,25,.08),rgba(4,27,25,.94)),url('${escapeCssUrl(event.image)}')`
      : `background:${category.fallback}`;

    article.innerHTML = `
      <div class="upcoming-card__background" style="${imageStyle}"></div>
      <div class="upcoming-card__content">
        <time class="date-badge" datetime="${escapeHtml(event.start)}">
          <strong>${formatDayNumber(start)}</strong>
          <span>${formatShortMonth(start)}</span>
        </time>
        <div class="upcoming-card__details">
          <p class="upcoming-card__time">${escapeHtml(formatTime(event.start))} WIB</p>
          <h3>${escapeHtml(event.title)}</h3>
          <p class="upcoming-card__location"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><title xmlns="">location</title><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>${escapeHtml(event.location)}</p>
          <span class="event-category-badge" style="--category-color:${category.color}">${escapeHtml(category.label)}</span>
        </div>
      </div>`;

    article.addEventListener("keydown", (keyboardEvent) => {
      if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
        keyboardEvent.preventDefault();
        openEventDialog(event, article);
      }
    });

    return article;
  }

  function scrollUpcoming(direction) {
    // const card = elements.upcomingEvents.querySelector(".upcoming-card");
    // const scrollDistance = card ? card.getBoundingClientRect().width + 16 : 320;
    // elements.upcomingEvents.scrollBy({ left: direction * scrollDistance, behavior: "smooth" });
    const cards = [...elements.upcomingEvents.querySelectorAll(".upcoming-card")];

    if (!cards.length) return;

    const containerLeft = elements.upcomingEvents.getBoundingClientRect().left;
    const targetCard = direction > 0
      ? cards.find((card) => {
          return card.getBoundingClientRect().left > containerLeft + 8;
        })
      : [...cards].reverse().find((card) => {
          return card.getBoundingClientRect().left < containerLeft - 8;
        });

    if (!targetCard) return;

    elements.upcomingEvents.scrollTo({
      left: targetCard.offsetLeft,
      behavior: "smooth"
    });
  }

  function updateUpcomingNavigation() {
    const container = elements.upcomingEvents;

    if (!container) return;

    const hasOverflow = container.scrollWidth > container.clientWidth + 1;
    const isAtStart = container.scrollLeft <= 1;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

    elements.upcomingPrevious.disabled = !hasOverflow || isAtStart;
    elements.upcomingNext.disabled = !hasOverflow || isAtEnd;

    elements.upcomingPrevious.setAttribute(
      "aria-disabled",
      String(!hasOverflow || isAtStart)
    );

    elements.upcomingNext.setAttribute(
      "aria-disabled",
      String(!hasOverflow || isAtEnd)
    );
  }

  function handleEventTriggerClick(event) {
    const trigger = event.target.closest("[data-event-id]");
    if (!trigger) return;
    const eventData = findEventById(trigger.dataset.eventId);
    if (eventData) openEventDialog(eventData, trigger);
  }

  function renderAgendaPanelForMonth(monthDate) {
    const monthStart = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      1
    );

    const monthEnd = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth() + 1,
      1
    );

    state.activeRangeStart = monthStart;
    state.activeRangeEnd = monthEnd;

    const monthEvents = getEventsInRange(monthStart, monthEnd);
    const monthYear = formatMonthYear(monthStart);

    elements.agendaPanelEyebrow.textContent = "AGENDA";
    elements.agendaPanelTitle.textContent =
      `Agenda ${monthYear}`;

    elements.agendaPanelList.replaceChildren();

    if (monthEvents.length > 0) {
      elements.agendaPanelEmpty.textContent =
        `Terdapat ${monthEvents.length} agenda pada bulan ${monthYear}. Pilih tanggal pada kalender untuk melihat detail agendanya.`;
    } else {
      elements.agendaPanelEmpty.textContent =
        `Belum ada agenda yang dipublikasikan untuk bulan ${monthYear}.`;
    }

    elements.agendaPanelEmpty.hidden = false;
  }

  function renderAgendaPanelForDate(date) {
    const dayStart = startOfDay(date);
    const dayEnd = addDays(dayStart, 1);
    const today = startOfDay(new Date());

    state.activeRangeStart = dayStart;
    state.activeRangeEnd = dayEnd;

    const isToday = isSameDay(dayStart, today);
    const events = getEventsInRange(dayStart, dayEnd);

    elements.agendaPanelEyebrow.textContent =
      isToday ? "AGENDA HARI INI" : "AGENDA";

    elements.agendaPanelTitle.textContent =
      capitalizeFirst(formatWeekdayDate(dayStart));

    const emptyMessage = isToday
      ? "Belum ada agenda yang dipublikasikan untuk hari ini."
      : `Belum ada agenda yang dipublikasikan untuk tanggal tersebut.`;
      // : `Belum ada agenda yang dipublikasikan untuk ${formatDate(dayStart)}.`;

    renderAgendaPanelItems(events, emptyMessage);
  }

  function renderAgendaPanelItems(
    events,
    emptyMessage = "Belum ada agenda yang dipublikasikan untuk tanggal tersebut."
  ) {
    // elements.agendaPanelList.replaceChildren();
    // elements.agendaPanelEmpty.hidden = events.length > 0;

    // events.forEach((event) => {
    //   const category = getCategory(event.category);
    //   const start = parseDateInput(event.start);
    //   const item = document.createElement("button");
    //   item.type = "button";
    //   item.className = "agenda-item";
    //   item.dataset.eventId = event.id;
    //   item.innerHTML = `
    //     <time class="date-badge date-badge--compact" datetime="${escapeHtml(event.start)}">
    //       <strong>${formatDayNumber(start)}</strong>
    //       <span>${formatShortMonth(start)}</span>
    //     </time>
    //     <span class="agenda-item__content">
    //       <strong>${escapeHtml(event.title)}</strong>
    //       <small>${escapeHtml(formatTimeRange(event.start, event.end))}</small>
    //       <small>${escapeHtml(event.location)}</small>
    //     </span>
    //     <span class="event-category-badge" style="--category-color:${category.color}">${escapeHtml(category.label)}</span>`;
    //   elements.agendaPanelList.appendChild(item);
    // });

    elements.agendaPanelList.replaceChildren();

    if (!events.length) {
      elements.agendaPanelEmpty.textContent = emptyMessage;
      elements.agendaPanelEmpty.hidden = false;
      return;
    }

    elements.agendaPanelEmpty.textContent = "";
    elements.agendaPanelEmpty.hidden = true;

    events.forEach((event) => {
      const category = getCategory(event.category);
      const start = parseDateInput(event.start);
      const item = document.createElement("button");

      item.type = "button";
      item.className = "agenda-item";
      item.dataset.eventId = event.id;

      item.innerHTML = `
        <time
          class="date-badge date-badge--compact"
          datetime="${escapeHtml(event.start)}"
        >
          <strong>${formatDayNumber(start)}</strong>
          <span>${formatShortMonth(start)}</span>
        </time>

        <span class="agenda-item__content">
          <strong>${escapeHtml(event.title)}</strong>
          <small>${escapeHtml(formatTimeRange(event.start, event.end))}</small>
          <small>${escapeHtml(event.location)}</small>
        </span>

        <span
          class="event-category-badge"
          style="--category-color:${category.color}"
        >
          ${escapeHtml(category.label)}
        </span>
      `;

      elements.agendaPanelList.appendChild(item);
    });
  }

  function getEventsInRange(rangeStart, rangeEnd) {
    return calendarEvents
      .filter((event) => {
        const eventStart = parseDateInput(event.start);
        const eventEnd = parseDateInput(event.end || event.start);
        return eventStart < rangeEnd && eventEnd >= rangeStart;
      })
      .sort((first, second) => parseDateInput(first.start) - parseDateInput(second.start));
  }

  function renderMobileDots(dayElement, date) {
    const existingDots = dayElement.querySelector(".mobile-day-dots");
    if (existingDots) existingDots.remove();

    const dateKey = toDateKey(date);
    const dayEvents = calendarEvents.filter((event) => toDateKey(parseDateInput(event.start)) === dateKey);
    if (!dayEvents.length) return;

    const dots = document.createElement("span");
    dots.className = "mobile-day-dots";
    dots.setAttribute("aria-hidden", "true");

    [...new Set(dayEvents.map((event) => event.category))].forEach((categoryKey) => {
      const dot = document.createElement("i");
      dot.style.setProperty("--event-color", getCategory(categoryKey).color);
      dots.appendChild(dot);
    });

    dayElement.querySelector(".fc-daygrid-day-frame")?.appendChild(dots);
  }

  function setSelectedDayHighlight(dayElement) {
    elements.calendar.querySelectorAll(".is-selected-day").forEach((element) => {
      element.classList.remove("is-selected-day");
    });
    dayElement.classList.add("is-selected-day");
  }

  function clearSelectedDayHighlight() {
    elements.calendar
      .querySelectorAll(".is-selected-day")
      .forEach((element) => {
        element.classList.remove("is-selected-day");
      });
  }

  // function openEventDialog(event, triggerElement) {
  //   const category = getCategory(event.category);
  //   state.lastFocusedElement = triggerElement || document.activeElement;

  //   elements.eventDialogCategory.textContent = category.label;
  //   elements.eventDialogCategory.style.setProperty("--category-color", category.color);
  //   elements.eventDialogTitle.textContent = event.title;
  //   elements.eventDialogOrganizer.textContent = event.organizer;
  //   elements.eventDialogDate.textContent = formatWeekdayDate(event.start);
  //   elements.eventDialogTime.textContent = formatTimeRange(event.start, event.end);
  //   elements.eventDialogLocation.textContent = event.location;
  //   elements.eventDialogDescription.textContent = event.description;

  //   if (event.image) {
  //     elements.eventDialogImage.src = event.image;
  //     elements.eventDialogImage.alt = `Poster ${event.title}`;
  //     elements.eventDialogImage.hidden = false;
  //     elements.eventDialogImage.parentElement.style.background = category.fallback;
  //     elements.eventDialogImage.onerror = () => {
  //       elements.eventDialogImage.hidden = true;
  //     };
  //   } else {
  //     elements.eventDialogImage.removeAttribute("src");
  //     elements.eventDialogImage.alt = "";
  //     elements.eventDialogImage.hidden = true;
  //     elements.eventDialogImage.parentElement.style.background = category.fallback;
  //   }

  //   if (event.link) {
  //     elements.eventDialogLink.href = event.link;
  //     elements.eventDialogLink.hidden = false;
  //   } else {
  //     elements.eventDialogLink.hidden = true;
  //   }

  //   if (typeof elements.eventDialog.showModal === "function") {
  //     elements.eventDialog.showModal();
  //   } else {
  //     elements.eventDialog.setAttribute("open", "");
  //   }
  // }

  function openEventDialog(event, triggerElement) {
    const category = getCategory(event.category);
    state.lastFocusedElement = triggerElement || document.activeElement;

    elements.eventDialogCategory.textContent = category.label;
    elements.eventDialogCategory.style.setProperty("--category-color", category.color);
    elements.eventDialogTitle.textContent = event.title;
    elements.eventDialogOrganizer.textContent = event.organizer;
    elements.eventDialogDateTime.textContent = formatEventDialogDateTime(event);
    elements.eventDialogLocation.textContent = event.location || "Lokasi belum diumumkan";

    // dialogContent berasal dari file statis yang dikelola sendiri. Jika tidak diisi, gunakan description sebagai fallback.
    if (typeof event.dialogContent === "string" && event.dialogContent.trim()) {
      elements.eventDialogContent.innerHTML = event.dialogContent;
    } else {
      elements.eventDialogContent.innerHTML = `
        <p>${escapeHtml(
          event.description ||
          "Informasi lengkap kegiatan belum tersedia."
        )}</p>
      `;
    }

    const mediaElement = elements.eventDialogImage.parentElement;
    if (event.image) {
      elements.eventDialogImage.src = event.image;
      elements.eventDialogImage.alt = `Poster ${event.title}`;
      elements.eventDialogImage.hidden = false;
      mediaElement.hidden = false;
      mediaElement.style.background = category.fallback;

      elements.eventDialogImage.onerror = () => {
        elements.eventDialogImage.removeAttribute("src");
        elements.eventDialogImage.hidden = true;
        mediaElement.style.background = category.fallback;
      };
    } else {
      elements.eventDialogImage.removeAttribute("src");
      elements.eventDialogImage.alt = "";
      elements.eventDialogImage.hidden = true;

      /*
      * Tetap tampilkan fallback gradient.
      * Ubah menjadi true apabila kamu ingin media benar-benar
      * hilang ketika event tidak mempunyai gambar.
      */
      mediaElement.hidden = false;
      mediaElement.style.background = category.fallback;
    }

    if (event.link) {
      elements.eventDialogLink.href = event.link;
      elements.eventDialogLink.hidden = false;
    } else {
      elements.eventDialogLink.removeAttribute("href");
      elements.eventDialogLink.hidden = true;
    }

    /*
    * Setiap dialog baru dibuka, posisi body dikembalikan ke atas.
    */
    const scrollArea =
      elements.eventDialog.querySelector(
        ".event-dialog__scroll"
      );

    if (scrollArea) { scrollArea.scrollTop = 0; }

    if (typeof elements.eventDialog.showModal === "function") {
      elements.eventDialog.showModal();
    } else {
      elements.eventDialog.setAttribute("open", "");
    }
  }

  function closeEventDialog() {
    if (elements.eventDialog.open && typeof elements.eventDialog.close === "function") {
      elements.eventDialog.close();
    } else {
      elements.eventDialog.removeAttribute("open");
      restoreDialogFocus();
    }
  }

  function restoreDialogFocus() {
    if (state.lastFocusedElement instanceof HTMLElement) {
      state.lastFocusedElement.focus({ preventScroll: true });
    }
  }

  function getCategory(categoryKey) {
    return categoryConfig[categoryKey] || categoryConfig.himtika;
  }

  function findEventById(eventId) {
    return calendarEvents.find((event) => event.id === eventId) || null;
  }

  function parseDateInput(value) {
    if (value instanceof Date) return new Date(value);
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) throw new Error(`Tanggal tidak valid: ${value}`);
    return parsed;
  }

  function startOfDay(dateInput) {
    const date = parseDateInput(dateInput);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function isSameDay(firstInput, secondInput) {
    const first = startOfDay(firstInput);
    const second = startOfDay(secondInput);

    return (
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
    );
  }

  function isSameMonth(firstInput, secondInput) {
    const first = parseDateInput(firstInput);
    const second = parseDateInput(secondInput);

    return (
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth()
    );
  }

  function startOfWeek(dateInput, firstDay) {
    const date = startOfDay(dateInput);
    const difference = (date.getDay() - firstDay + 7) % 7;
    date.setDate(date.getDate() - difference);
    return date;
  }

  function addDays(dateInput, amount) {
    const date = parseDateInput(dateInput);
    date.setDate(date.getDate() + amount);
    return date;
  }

  function toDateKey(dateInput) {
    const date = parseDateInput(dateInput);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function formatDate(dateInput) {
    return new Intl.DateTimeFormat("id-ID", {
      timeZone: TIME_ZONE,
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(parseDateInput(dateInput));
  }

  function formatWeekdayDate(dateInput) {
    return new Intl.DateTimeFormat("id-ID", {
      timeZone: TIME_ZONE,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(parseDateInput(dateInput));
  }

  function formatShortDate(dateInput) {
    return new Intl.DateTimeFormat("id-ID", {
      timeZone: TIME_ZONE,
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).format(parseDateInput(dateInput));
  }

  function formatMonthYear(dateInput) {
    return capitalizeFirst(new Intl.DateTimeFormat("id-ID", {
      timeZone: TIME_ZONE,
      month: "long",
      year: "numeric"
    }).format(parseDateInput(dateInput)));
  }

  function formatDayNumber(dateInput) {
    return new Intl.DateTimeFormat("id-ID", {
      timeZone: TIME_ZONE,
      day: "2-digit"
    }).format(parseDateInput(dateInput));
  }

  function formatShortMonth(dateInput) {
    return new Intl.DateTimeFormat("id-ID", {
      timeZone: TIME_ZONE,
      month: "short"
    }).format(parseDateInput(dateInput)).replace(".", "").toUpperCase();
  }

  function formatTime(dateInput) {
    return new Intl.DateTimeFormat("id-ID", {
      timeZone: TIME_ZONE,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(parseDateInput(dateInput)).replace(".", ".");
  }

  function formatTimeRange(startInput, endInput) {
    const startText = formatTime(startInput);
    if (!endInput) return `${startText} WIB`;
    const endText = formatTime(endInput);
    return `${startText}–${endText} WIB`;
  }

  function formatEventDialogDateTime(event) {
    const start = parseDateInput(event.start);
    const end = event.end ? parseDateInput(event.end) : null;
    const customEndLabel = typeof event.timeLabel === "string" ? event.timeLabel.trim() : "";

    if (!end) { return `${formatWeekdayDate(start)} • ${formatTime(start)} WIB`; }

    const isSameEventDay = isSameDay(start, end);

    /* Event satu hari, waktu selesai tidak diketahui. */
    if (isSameEventDay && customEndLabel) {
      return (
        `${formatWeekdayDate(start)} • ` + `${formatTime(start)} WIB–${customEndLabel}`
      );
    }
    /* Event satu hari, jam selesai diketahui. */
    if (isSameEventDay) {
      return (
        `${formatWeekdayDate(start)} • ` + `${formatTime(start)}–${formatTime(end)} WIB`
      );
    }
    /* Event beberapa hari, waktu selesai tidak diketahui. */
    if (customEndLabel) {
      return (
        `${formatWeekdayDate(start)} ${formatTime(start)} WIB – ` + `${formatWeekdayDate(end)} ${customEndLabel}`
      );
    }
    /* Event beberapa hari, jam mulai dan selesai diketahui. */
    return (
      `${formatWeekdayDate(start)} ${formatTime(start)} WIB – ` + `${formatWeekdayDate(end)} ${formatTime(end)} WIB`
    );
  }

  function formatDateRange(startInput, endInput) {
    const start = parseDateInput(startInput);
    const end = parseDateInput(endInput);

    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.getDate()}–${end.getDate()} ${new Intl.DateTimeFormat("id-ID", {
        timeZone: TIME_ZONE,
        month: "long",
        year: "numeric"
      }).format(end)}`;
    }

    return `${formatShortDate(start)} – ${formatShortDate(end)}`;
  }

  function capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeCssUrl(value) {
    return String(value).replaceAll("'", "\\'").replaceAll("\\", "\\\\");
  }
})();
