// export const useCVStore = defineStore("cv", {
//   state: () => ({
//     timelineItems: [
//       {
//         id: 1,
//         title: "High School Grad",
//         subtitle: "Science Focus",
//         description: "Graduated with honors in science and mathematics",
//         date: "2012",
//         type: "education",
//       },
//       {
//         id: 2,
//         title: "Food Engineering",
//         subtitle: "University of Technology",
//         description: "Bachelor degree in Food Engineering",
//         date: "2012-2016",
//         type: "education",
//       },
//       {
//         id: 3,
//         title: "Food Technology Grad",
//         subtitle: "Advanced Studies",
//         description: "Master degree in Food Technology",
//         date: "2016-2018",
//         type: "education",
//       },
//       {
//         id: 4,
//         title: "Lab Technician",
//         subtitle: "Research Lab",
//         description: "Worked as a lab technician in food research",
//         date: "2016-2018",
//         type: "professional",
//       },
//       {
//         id: 5,
//         title: "Scientific Investigator",
//         subtitle: "Food Research Institute",
//         description: "Conducted research on food preservation techniques",
//         date: "2018-2020",
//         type: "professional",
//       },
//     ] as TimelineItem[],
//   }),
//   getters: {
//     getEducationalItems: (state) =>
//       state.timelineItems.filter((item) => item.type === "education"),
//     getProfessionalItems: (state) =>
//       state.timelineItems.filter((item) => item.type === "professional"),
//     getOtherItems: (state) =>
//       state.timelineItems.filter((item) => item.type === "other"),
//   },
// });
