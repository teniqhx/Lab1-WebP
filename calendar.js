const calendarContainer = document.getElementById("calendar");

function getCurrentDate() {
    const today = new Date();
    return {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate()
    };
}

function createCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;

    let calendarHTML = `<table>
                          <caption>${year} / ${month + 1}</caption>
                          <tr>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                            <th>Нд</th>
                          </tr>
                          <tr>`;

    let dayOfWeek = 0;
    for (let i = 0; i < startDayOfWeek; i++) {
        calendarHTML += "<td></td>";
        dayOfWeek++;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (dayOfWeek === 7) {
            calendarHTML += "</tr><tr>";
            dayOfWeek = 0;
        }

        calendarHTML += `<td>${day}</td>`;
        dayOfWeek++;
    }

    calendarHTML += "</tr></table>";

    return calendarHTML;
}

const currentDate = getCurrentDate();
calendarContainer.innerHTML = createCalendar(currentDate.year, currentDate.month);
