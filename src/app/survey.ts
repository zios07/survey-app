export const surveyJSON = {
  title: "Demo Survey",
  showProgressBar: "top",
  pages: [
    {
      name: "page1",
      elements: [
      {
        type: "text",
        name: "question1",
        title: "Short answer",
        isRequired: true
      }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          type: "comment",
          name: "question2",
          title: "Paragraph",
          isRequired: true
         }
      ]
    },
    {
      name: "page3",
      elements: [
        {
          type: "radiogroup",
          name: "frameworkUsing",
          title: "Do you use any front-end framework like Bootstrap?",
          isRequired: true,
          choices: [
          "Yes",
          "No"
          ]
        }
      ]
    },
    {
      name: "page4",
      elements: [
        {
          type: "checkbox",
          name: "framework",
          title: "What front-end framework do you use?",
          isRequired: true,
          hasOther: true,
          choices: [
           "Bootstrap",
           "Foundation"
          ]
         }
      ]
    }
    ]
 };