import jsPsychHtmlButtonResponse from '@jspsych/plugin-html-button-response';
import jsPsychSurveyText from '@jspsych/plugin-survey-text';
import jsPsychSurveyMultiChoice from '@jspsych/plugin-survey-multi-choice';

function demographics_timeline(jsPsych){
var timeline = [];

var consent = {
  type: jsPsychHtmlButtonResponse,
  stimulus: 'If you are willing, please answer the following demographics questions. <br> Whether you answer these questions will not affect your compensation. ',
  choices: ['Continue to demographics questions', 'Skip to the end of study'],
  
  on_finish: function(data){
    if(data.response == 1){

    var conclude = [verify]
    jsPsych.endCurrentTimeline()
    jsPsych.run(conclude)    
    }
  }
}

timeline.push(consent);

var demo1 = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'How old are you?'}
  ],
  data: {
    stimulus: ' '
  }
}

timeline.push(demo1);

var demo2 = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "Gender: ", 
      name: 'genderquery', 
      options: ['Male', 'Female', 'Non-Binary'], 
      required: false
    }, 
    {
      prompt: "Dominant Hand: ", 
      name: 'handedness', 
      options: ['Left-Handed', 'Right-Handed', 'Ambidextrous'], 
      required: false
    },
    {
      prompt: "Ethnicity: ", 
      name: 'ethnicity', 
      options: ['Latino or Hispanic', 'Not Latino or Hispanic'], 
      required: false
    },
    {
      prompt: "Race: ", 
      name: 'race', 
      options: ['American Indian or Alaska Native', 'Asian','Black or African American', 'Native Hawaiian or Other Pacific Islander','White','None Apply'], 
      required: false
    },
  ],
  data: {
    stimulus: ' '
  }
};

timeline.push(demo2)

var demo3 = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'List the language(s) you know and how many years you have been using them:', placeholder: 'Language, Time', required: false},
    {prompt: 'Which language(s) are you a fluent speaker in?'},
    {prompt: 'Which language(s) are you a fluent listener in?'},
    {prompt: 'Which language(s) are you a fluent reader in?'},
    {prompt: 'Which language(s) are you a fluent writer in?'}
    
  ],
  data: {
    stimulus: ' '
  }
}

timeline.push(demo3)

var demo4 = {
  type: jsPsychSurveyText,
  preamble:'List the language(s) you know next to the phrase that best describes how often you use them: ',
  questions: [
    {prompt: 'Every day: '},
    {prompt: 'A few times a week: '},
    {prompt: 'A few times a month: '},
    {prompt: 'A few times a year: '},
    {prompt: 'It’s been a few years since I’ve used it: '}
    
  ],
  data: {
    stimulus: ' '
  }
}

timeline.push(demo4)

var subject_ID = jsPsych.randomization.randomID(8)
    var verify = {
      type: jsPsychHtmlButtonResponse,
      stimulus: "<strong> Copy code: </strong>" + subject_ID + "" +
        "<p> Your data have been saved. Here is your personal code for this task.",
      choices: ["FINISH"],
      on_finish: function () {
        jsPsych.endExperiment('You have completed the experiment! <p> </p> <p>Thank you for your time!</p>'),
        jsPsych.data.addProperties({subjectID: subject_ID});
      }
    };

timeline.push(verify)

return timeline
}
export default demographics_timeline;
