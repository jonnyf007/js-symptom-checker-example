const template = `
  <div class="card">
      <div class="card-header">
          Docto Symptom Checker
          <span class="d-none d-sm-block float-right text-muted">
            <a href="http://www.docto.com.au/">
              <img class="logo" src="/public/assets/resource/docto-brand.png">
            </a>
          </span>
      </div>
      <div id="step-container" class="card-block padded">
        <!-- dynamic content goes here -->
      </div>
      <div class="card-footer">
      <span class="d-sm-block d-lg-none float-left text-muted">
            <a href="http://www.docto.com.au/">
              <img class="logo" src="/public/assets/resource/docto-brand.png">
            </a>
          </span>
          <button id="next-step" class="btn btn-primary float-right">
          Next <i class="fa fa-chevron-right"></i></button>
      </div>
  </div>
`;

export default template;
