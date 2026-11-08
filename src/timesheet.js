const TIME_UNIT_HOURS = 0.5;

class Timesheet {
  #timesheets = new Map();

  submitTimesheet(projectName, duration) {
    const name = Timesheet.#normaliseProjectName(projectName);
    if (name === null || !Timesheet.#isValidDuration(duration)) {
      return false;
    }
    const current = this.#timesheets.get(name) ?? 0;
    this.#timesheets.set(name, current + duration);
    return true;
  }

  getTimesheets() {
    return [...this.#timesheets.values()];
  }

  getTotalTimesheetHours(projectName) {
    const name = Timesheet.#normaliseProjectName(projectName);
    if (name === null) {
      return 0;
    }
    return this.#timesheets.get(name) ?? 0;
  }

  static #normaliseProjectName(projectName) {
    if (typeof projectName !== 'string') {
      return null;
    }
    const name = projectName.trim();
    return name === '' ? null : name;
  }

  static #isValidDuration(duration) {
    return (
      typeof duration === 'number' &&
      Number.isFinite(duration) &&
      duration > 0 &&
      Number.isInteger(duration / TIME_UNIT_HOURS)
    );
  }
}

module.exports = Timesheet;