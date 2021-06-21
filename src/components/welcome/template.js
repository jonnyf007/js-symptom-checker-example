/* eslint-disable max-len */
/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
    <div class="centered">
      <h5 class="card-title">Welcome to Docto's Symptom Checker.</h5>
      <div class="card-text center">
        <p class="text-white">
          <strong>Before using the symptom checker please remember that:</strong>
        </p>
        <ul>
        <li>
            <strong>This is not a diagnosis.</strong> Docto's Symptom Checker is for informational purposes and it's not a qualified medical opinion.
        </li>
                <li>
            <strong>Do not use in emergencies</strong> In case of health emergency, call you local emergency number immediately.
        </li>
                        <li>
            <strong>Your data is safe</strong> The information you share is anonymous and not shared with anyone.
        </li>
        </ul>
        <p> <Strong>By Clicking on the <span class="badge badge-primary">Next</span> button bellow you accept this terms of service. </Strong></p>
      </div></div>
    `);
  });
};

export default template;
