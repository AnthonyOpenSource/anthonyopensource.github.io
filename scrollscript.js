var elmnts = document.getElementsByClassName("scrllable");
  for(var i = 0;i < elmnts.length;i++)
  {
	  console.log(elmnts[i].dataset.scroll);
  }

function lerpColor(a, b, amount) {

    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}
function prjscrl(pos)
{
console.log(":::");
console.log(pos);
if(pos > 2){
	document.getElementById("PRJ").style.backgroundColor = lerpColor("#1ea11b","#08a0c9",(pos-2)/2);
}
}
function namelerpclr(pos)
{
	console.log(pos+"LLLLLLLL");
	document.getElementById("NAMELBL").style.color = lerpColor(lerpColor("#000000","#42f5e9",pos/1.2),"#550045",pos/1.2);
	document.body.style.backgroundColor = lerpColor("#FFFFFF","#ff3895",pos/2);
}
var customfuncs = {"NAME":namelerpclr,"PRJ":prjscrl}
var elementpgs = {"NAME":1.2,"PRJ":4}
document.addEventListener('scroll', function(e) {
  var scrll = window.scrollY;
  var scrllpgs = scrll / window.innerHeight;
  console.log(scrll);
  console.log(scrllpgs);
  for(var i = 0;i < elmnts.length;i++)
  {
	  if(customfuncs[elmnts[i].id] != null)
	  {
		  customfuncs[elmnts[i].id](scrllpgs);
	  }
	  console.log(elementpgs[elmnts[i].id]);
	  if(elementpgs[elmnts[i].id] < scrllpgs){
	  elmnts[i].style.position='relative';
	  }
	  if(elementpgs[elmnts[i].id] > scrllpgs)

		  {
			  elmnts[i].style.position='sticky';
			  console.log(elmnts[i].id+"sticky");
		  }
  }
});
