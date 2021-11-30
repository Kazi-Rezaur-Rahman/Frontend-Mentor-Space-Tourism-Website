//const home = document.querySelector('.home');
const toggle_btn = document.querySelector('.toggle-nav');
const primary_nav = document.querySelector('.primary-nav');
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');




toggle_btn.addEventListener('click',()=>{
const visibility = primary_nav.getAttribute("data-visible");
  if(visibility === 'false'){
    primary_nav.setAttribute("data-visible", true);
    toggle_btn.setAttribute("aria-expanded",true);
  } else{
    primary_nav.setAttribute("data-visible", false);
    toggle_btn.setAttribute("aria-expanded",false);
  }
  //console.log(toggle_btn.getAttribute('aria-expanded'));

})


//tab change
tabList.addEventListener('keydown', changeTabFoucus);
tabs.forEach((tab)=>{
  tab.addEventListener('click',changeTabPanel);
});


let tabFocus = 0;

function changeTabFoucus(e){
  const keydownLeft = 37;
  const keydownRight = 39;
    //console.log(e.keyCode);

    if(e.keyCode === keydownLeft || e.keyCode === keydownRight){
      tabs[tabFocus].setAttribute("tabindex", -1);

      if(e.keyCode === keydownRight){
        tabFocus++;
        if(tabFocus >= tabs.length){
          tabFocus = 0;
        }
        //console.log(tabFocus)
      } else if(e.keyCode === keydownLeft){
        tabFocus--;
        if(tabFocus < 0){
          tabFocus = tabs.length -1;
        }
        //console.log(tabFocus)
      }
      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }

}
//change panel
 function changeTabPanel(e){
   const targetTab = e.target;
   const targetPanel = targetTab.getAttribute("aria-controls");
   const targetImage = targetTab.getAttribute("data-image");
   const targetTech = targetTab.getAttribute("data-tech");

   const tabContainer = targetTab.parentNode;
   const mainContainer = tabContainer.parentNode;

   tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
   targetTab.setAttribute("aria-selected",true);

console.log(targetTech);

   /*mainContainer
    .querySelectorAll('[role= "tabpanel"]')
    .forEach((panel) => panel.setAttribute("hidden", true));

   mainContainer.querySelector([`#${targetTech}`]).removeAttribute('hidden');
   hideContent(mainContainer,'[role= "tabpanel"]');
   showContent(mainContainer,[`#${targetTech}`] )
     mainContainer.querySelector([`#${targetTech}`]).removeAttribute('hidden');

   hideContent(mainContainer,'picture');
   showContent(mainContainer,[`#${targetImage}`] )*/




   mainContainer
    .querySelectorAll('picture')
    .forEach((picture) => picture.setAttribute("hidden", true));

    mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');


   //console.log(mainContainer);
 }


 function hideContent(parent, content) {
     parent
         .querySelectorAll(content)
         .forEach((item) => item.setAttribute("hidden", true));
 }
 function showContent(parent, content) {
      parent.querySelector(content).removeAttribute('hidden');
 }
