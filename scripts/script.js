const navigation = document.getElementById("navigation");
const navigationToggle = navigation.querySelector(".navigation-toggle"); 

function openMobilenavigation() {
  navigation.classList.add("opened");
  navigationToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobilenavigation() {
  navigation.classList.remove("opened");
  navigationToggle.setAttribute("aria-label", "Open navigation menu.");
} 

navigationToggle.addEventListener("click", () => {
  if (navigation.classList.contains("opened")) {
    closeMobilenavigation();
  } else {
    openMobilenavigation();
  }
});

const navigationMenu = navigation.querySelector(".navigation-menu");
const navigationLinksContainer = navigation.querySelector(".navigation-links");

navigationLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navigationMenu.addEventListener("click", closeMobilenavigation);


const jobs = document.querySelector('.jobs'); 
const panels = document.querySelectorAll('.panel'); 
jobs.addEventListener('click', function(e){ 
  if(e.target.tagName == "LI"){   
    const targetPanel = document.querySelector(e.target.dataset.target); 
    panels.forEach(function(panel){
      if (panel == targetPanel){   
        panel.classList.add('active'); 
      } else {
        panel.classList.remove('active');
      }
    })
  }
})


