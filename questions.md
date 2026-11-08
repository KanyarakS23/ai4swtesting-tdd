# Activity 1 – Clarifying questions for the timesheet user story

Generated with the Activity 1 prompt (quality characteristics: Accuracy and Consistency),
then sorted into **Act on now**, **Shelve for later** or **Rule out**.

1. **[Act on now]** What does "half hour units" mean for the values that can be entered?
   Can a user enter 1.25 hours or 20 minutes, and if so, is it rejected, rounded up, rounded down or rounded to the nearest half hour? Without a rule, totals may be inaccurate.

2. **[Act on now]** How will the system handle invalid time entries?
   The story doesn't say what happens with zero, negative, non-numeric or empty durations, so the stored hours may not be accurate.

3. **[Act on now]** What counts as a valid project?
   Must the project already exist in a list, or can any text be entered? Are "Project 1", "project 1" and " Project 1 " the same project? Inconsistent names would split one project's history.

4. **[Act on now]** What happens when time is submitted to the same project more than once?
   Should a new entry add to the existing hours, replace them, or be stored as a separate entry in the history? (Used in Activity 4: entries for the same project are added together.)

5. **[Act on now]** What does "complete a timesheet" mean, and what is returned when it succeeds or fails?
   The story says a project and amount of time "must be entered", but not how the user is told that a submission was accepted or rejected.

6. **[Shelve for later]** Who is "I", and how does the system know who the user is?
   "Only I should be able to see my tracked time" implies users and authentication, which are out of scope while there is only one user in memory.

7. **[Shelve for later]** What happens if the same timesheet is updated from two places at once?
   Concurrent updates could make totals inconsistent. Only one user and one in-memory object exist for now, but this may matter later.

8. **[Shelve for later]** Is there a maximum amount of time per entry or per day?
   Can a user record 30 hours in one day? A limit would protect accuracy but needs a business decision.

9. **[Shelve for later]** Can a submitted entry be edited or deleted, and is the change kept in the history?
   "Keep a history" suggests entries should stay consistent over time, but no correction flow is described.

10. **[Rule out]** When is time tracked, and which time zone is used for the dates?
    We only track *how much* time was spent, not *when*, so dates and time zones are not part of this feature.
