/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    resolve(html`
      <h5 class="card-title">Tell us how you feel.</h5>
      <div class="card-text">
        <form>
          <div class="form-group">
            <label for="input-feel">
              We will try to recognize your symptoms using Natural Language Processing algorithms.
            </label>
            <textarea placeholder="e.g. I got headache" class="form-control" id="input-feel" rows="4"></textarea>
          </div>
        </form>
        <p>Identified observations:</p>
        <ul class="list-unstyled" id="observations">
        </ul>
        <p class="text-muted small pt-3">
          <i class="fa fa-exclamation-circle"></i>
          Please note that you can go <span class="badge badge-primary">Next</span> only if there are 
          <span class="text-success">present <i class="fa fa-plus-circle"></i></span>
          identified observations.
        </p>
      </div>
    `);
  });
};

export default template;
