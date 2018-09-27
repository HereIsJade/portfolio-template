!function(){
	let progressDivs = document.querySelectorAll('#siteSkills ol .progress')
	progressDivs.forEach((pDiv)=>{
		pDiv.classList.add('offset')
	})

  // slide in upwards animation for [data-x] sections
  ScrollReveal().reveal('[data-x]',{
    distance: '100px',
    duration: 1000});

  // slide in inwards animation for timeline boxes
  ScrollReveal().reveal('.timeline-box.left',{
    origin:'left',
    distance: '80px',
    duration: 1000});
  ScrollReveal().reveal('.timeline-box.right',{
    origin:'right',
    distance: '80px',
    duration: 1400});

	ScrollReveal().reveal('#siteSkills ol .progress',{
		afterReveal: function (el) {
			el.classList.remove('offset');
		}
		});

  // calculate height of timeline-bar and render
  let timelineBoxes = document.querySelectorAll('.timeline-box')
  let length = timelineBoxes.length
  let lowestIndex = timelineBoxes[Math.round(length/2)-1].offsetTop > timelineBoxes[length-1].offsetTop ? Math.round(length/2)-1 : length-1
  let timelineBar = document.querySelector('.timeline-bar')
  timelineBar.style.height = timelineBoxes[lowestIndex].offsetTop - timelineBoxes[0].offsetTop+'px'


  let specialSections = document.querySelectorAll('[data-x]')


  // highlight the li tag of topNavBar for the closest section
  window.addEventListener('scroll',()=>{
    findClosest(specialSections);
  })

  function findClosest(specialTags){
    let minIndex = 0;

    // find closest section
    specialTags.forEach((specialTag, index)=>{
      if(Math.abs(specialTag.offsetTop-window.scrollY) < Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
        minIndex = index;
      }
    })

    let highlightLi=document.querySelector("a[href='#"+specialTags[minIndex].id+"']").parentNode;
    let siblings = highlightLi.parentNode.children;

    for (let i=0;i<siblings.length;i++){
      siblings[i].classList.remove("highlight");
    }
    highlightLi.classList.add("highlight");

  }
}()

