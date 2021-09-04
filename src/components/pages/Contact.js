import React from 'react';

export default function Contact() {
  return (
    <section id="contact" class="services">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2 class="contactMeHeader">Contact Me</h2>
      </div>

      <div class="row">
        {/* <!-- linkedin account --> */}
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 contactMeBlocks">
          <a
            href="https://www.linkedin.com/in/nathan-nguyen-042480192/"
            class="contactMeBlocksInterior"
          >
            <h4>LinkedIn</h4>
            <p>in/nathannguyen</p>
          </a>
        </div>

        {/* <!-- github account --> */}
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 contactMeBlocks">
          <a
            href="https://github.com/nathanknguyen"
            class="contactMeBlocksInterior"
          >
            <h4>GitHub</h4>
            <p>nathanknguyen96</p>
          </a>
        </div>

        {/* <!-- email --> */}
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 contactMeBlocks">
          <a
            href="mailto: dannyroubin1@gmail.com"
            class="contactMeBlocksInterior"
          >
            <h4>Email</h4>
            <p>nathanknguyen96@gmail.com</p>
          </a>
        </div>

        {/* <!-- phone --> */}
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 contactMeBlocks">
          <a href="tel:2067872406" class="contactMeBlocksInterior">
            <h4>Phone</h4>
            <p>(206)351-2900</p>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}