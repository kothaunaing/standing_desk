const faqs = [
  {
    question: "What is a standing desk?",
    answer:
      "A standing desk, also known as a stand-up desk, lets you work while standing. It can improve your health and may help you work better.",
  },
  {
    question: "What are the health benefits of using a standing desk?",
    answer:
      "A standing desk can improve your posture, give you more energy, and reduce back pain. Studies show that standing throughout the day can increase productivity and improve blood flow, which helps prevent tiredness and discomfort.",
  },
  {
    question: "How often should I stand while using a standing desk?",
    answer:
      "We suggest starting with 30-60 minutes of standing every couple of hours, and increasing it over time. Switching between sitting and standing helps you avoid strain and get the most health benefits.",
  },
  {
    question: "What makes your standing desks unique?",
    answer:
      "Our desks are built with comfort in mind, using strong materials and a smooth, quiet height adjustment. Each desk is made to be stable and long-lasting, creating a comfortable and productive workspace.",
  },
  {
    question: "How do I know which standing desk model is right for me?",
    answer:
      "We have different types of standing desks, from simple manual ones to advanced electric ones. If you're not sure which one to choose, our customer support team can help based on your workspace, how you plan to use it, and your budget.",
  },
  {
    question: "Do you offer a warranty on your desks?",
    answer:
      "Yes, all our standing desks come with a 1-year warranty that covers mechanical parts and build quality. Our support team can help with any warranty questions you have.",
  },
  {
    question: "Can I use a standing desk with multiple monitors?",
    answer:
      "Yes, our desks are made to hold multiple monitors, as long as the weight doesn’t go over the desk’s limit. Many models also have cable management features to keep your workspace tidy.",
  },
  {
    question: "Does your company offer installation services?",
    answer:
      "Yes, we offer installation in certain areas. During checkout, you can check if installation is available in your area. Our support team can also help you with any setup questions.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30 or 60-day satisfaction guarantee. If you're not fully happy with your desk, you can return it within this time for a full refund, as long as it’s in its original condition. See our return policy page for more details.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team by email or phone. They’re available from 7 A.M. to help with any questions about products, orders, or support.",
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
              <i class="fa fa-chevron-down"></i>
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

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + 15 + "px";
      accordionContent.style.padding = "10px 5px";
    } else {
      accordionContent.style.maxHeight = "0";
      accordionContent.style.padding = "0 5px";
    }
  });
});
