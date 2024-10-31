const faqs = [
  {
    question: "What is a standing desk, and how does it work?",
    answer:
      "A standing desk is an adjustable desk that allows you to alternate between sitting and standing throughout your workday. Our desks are equipped with easy-to-use height adjustment features, either manual or electric, to help you find the most comfortable working position.",
  },
  {
    question: "What are the health benefits of using a standing desk?",
    answer:
      "Using a standing desk can improve posture, increase energy, reduce back pain, and help prevent health issues associated with prolonged sitting. Studies have shown that standing periodically throughout the day can boost productivity and enhance circulation, helping to reduce fatigue and discomfort.",
  },
  {
    question: "How often should I stand while using a standing desk?",
    answer:
      "We recommend starting with 30-60 minutes of standing every couple of hours and gradually increasing this over time. Alternating between sitting and standing in intervals can help avoid strain and maximize the health benefits of your desk.",
  },
  {
    question: "What makes your standing desks unique?",
    answer:
      "Our standing desks are designed with ergonomic features, durable materials, and a smooth, quiet height adjustment mechanism. Each desk is crafted with attention to detail to provide stability and durability, ensuring a comfortable and productive workspace.",
  },
  {
    question: "How do I know which standing desk model is right for me?",
    answer:
      "We offer a variety of standing desks, from basic manual models to high-tech electric versions. If you're unsure which desk best suits your needs, our customer support team can help guide you based on your workspace, usage preferences, and budget.",
  },
  {
    question: "Do you offer a warranty on your desks?",
    answer:
      "Yes, all of our standing desks come with a [X-year] warranty covering mechanical parts and craftsmanship. Our customer support team is always available to assist with any warranty-related questions or concerns.",
  },
  {
    question: "Can I use a standing desk with multiple monitors?",
    answer:
      "Absolutely. Our desks are designed to support multiple monitors, provided the weight does not exceed the maximum load capacity. Many of our models include cable management solutions to keep your workspace organized.",
  },
  {
    question: "How easy is it to assemble the standing desk?",
    answer:
      "Each standing desk comes with a detailed instruction manual, and assembly typically takes less than an hour. We also offer online resources, including setup videos and troubleshooting tips, to help make the process as smooth as possible.",
  },
  {
    question: "Does your company offer installation services?",
    answer:
      "Yes, we provide optional installation services in select locations. During checkout, you’ll be able to see if installation is available in your area. Alternatively, our support team is here to assist with any questions you have about assembly.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a [30- or 60-day] satisfaction guarantee. If you're not completely satisfied with your desk, you can return it within this period for a full refund, provided it’s in its original condition. Check our return policy page for further details.",
  },
  {
    question: "Do you offer bulk discounts for offices?",
    answer:
      "Yes, we offer discounts for bulk purchases for corporate clients, schools, and other organizations looking to furnish multiple workspaces. Contact our sales team to discuss bulk pricing options tailored to your needs.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email, phone, or live chat on our website. Our team is available from [insert hours] to help with any inquiries you may have about products, orders, or support.",
  },
];

const accordionElement = document.querySelector(".accordion");
// generate html for accordion item with JavaScript

function renderAccordion() {
  let html = "";

  faqs.forEach((item) => {
    html += `
        <div class="accordion-item">
            <button class="accordion-header">
              <div>${item.question}</div>
              <i class="fa fa-plus"></i>
            </button>
            <div class="accordion-content">
              <p>
                ${item.answer}
              </p>
            </div>
        </div>
        `;
  });

  accordionElement.innerHTML = html;
}

renderAccordion();

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    const plusIcon = button.children[1];

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + 15 + "px";
      accordionContent.style.padding = "10px 5px";
      plusIcon.className = "fa fa-minus";
    } else {
      accordionContent.style.maxHeight = "0";
      accordionContent.style.padding = "0 5px";
      plusIcon.className = "fa fa-plus";
    }
  });
});
