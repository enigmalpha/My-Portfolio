const details={
policies:{category:'Identity ecosystem',number:'03 / ACCESS CONTROL',title:'RBAC & policies',subtitle:'Connect job responsibilities with appropriate access.',intro:'Role-based access control groups permissions around roles. Access workflows and business rules help apply those permissions consistently.',heading:'My experience',points:['Configure and maintain RBAC roles, access workflows, and business rules in Saviynt under senior team guidance.','Support access modifications and Active Directory group management.','Participate in testing and change validation to align IAM configurations with business requirements.'],tags:['RBAC','Access workflows','Business rules']},
reviews:{category:'Identity ecosystem',number:'04 / ACCESS REVIEWS',title:'Access certifications',subtitle:'Review whether access is still appropriate.',intro:'Access certifications let reviewers assess existing permissions and identify access that should be retained or removed. These are access reviews, distinct from professional credentials.',heading:'My focus',points:['Experience supporting access certifications in enterprise IAM environments.','Support identity governance, audit, and compliance requirements.','Maintain clear operational documentation and collaborate with application owners.'],tags:['Access reviews','Identity governance','Compliance']},
nextgen:{category:'Professional experience',number:'01 / NEXTGEN IDENTITY',title:'IAM Analyst',subtitle:'NextGen Identity · February 2025 – Present',intro:'Supporting secure, consistent access across enterprise environments through Saviynt EIC and Active Directory.',heading:'What I work on',points:['Process around 50 access requests each week, including provisioning, deprovisioning, access changes, password resets, and AD group management.','Support user imports, identity reconciliation, and access request processing in Saviynt EIC.','Validate user attribute mapping, synchronization, and provisioning for Active Directory (LDAP) integrations.','Configure access workflows, RBAC roles, and business rules under the guidance of senior team members.','Monitor scheduled import and provisioning jobs, investigate failures, and troubleshoot through log analysis.','Collaborate with application owners to resolve incidents within SLA commitments.','Maintain technical documentation and process guides, support testing and change validation, and help reduce recurring access issues.'],tags:['Saviynt EIC','Active Directory','Identity lifecycle','RBAC','SLA management']},
identity:{category:'Technical toolkit',number:'01 / FOUNDATION',title:'Identity & governance',subtitle:'Managing access throughout the identity lifecycle.',intro:'Hands-on experience with Saviynt EIC, supported by knowledge of core identity governance concepts.',heading:'Skills & focus',points:['Saviynt EIC and Identity Governance & Administration (IGA)','Identity lifecycle management and identity reconciliation','User provisioning and deprovisioning','Access request management and access certifications','Segregation of Duties (SoD)'],tags:['Saviynt','IGA','Identity lifecycle']},
directories:{category:'Technical toolkit',number:'02 / CONNECTION',title:'Directories & access',subtitle:'Connecting identity data with the access people need.',intro:'Supporting directory integrations and access configurations in enterprise IAM operations.',heading:'Skills & focus',points:['Active Directory and LDAP integration support','User attribute mapping and synchronization validation','AD group management and account provisioning','RBAC role configuration, access workflows, and business rules'],tags:['Active Directory','LDAP','RBAC']},
development:{category:'Technical toolkit',number:'03 / BUILDING BLOCKS',title:'Code & integrations',subtitle:'A computer science foundation for connected systems.',intro:'Programming, databases, and APIs complement my work in identity management.',heading:'Languages & tools',points:['Java, Python, and JavaScript','SQL and MySQL','REST APIs, JSON, and Postman','Git and AWS fundamentals','Additional internship experience with ReactJS, Figma, and Kotlin'],tags:['Python','Java','JavaScript','SQL','REST APIs']},
operations:{category:'Technical toolkit',number:'04 / EVERYDAY IMPACT',title:'Operations & people',subtitle:'Resolving issues and making work easier to repeat.',intro:'IAM operations depend on clear communication as much as careful technical execution.',heading:'How I contribute',points:['Incident resolution, log analysis, and troubleshooting','Technical documentation, process guides, and knowledge articles','Cross-functional collaboration with application owners and teams','Client discussions, testing, and change validation','Request handling improvements and recurring issue resolution'],tags:['Problem solving','Documentation','Collaboration']},
assistant:{category:'Personal project',number:'01 / VOICE ASSISTANT',title:'Speak. Simplify.',subtitle:'A desktop voice assistant built with Python.',intro:'A project exploring how natural language input can make everyday computer tasks more convenient.',heading:'What I built',points:['Combined speech recognition and text-to-speech libraries in a desktop assistant.','Integrated external APIs for web searches and weather updates.','Added application control through voice commands.','Focused on automating routine tasks and improving user interaction.'],tags:['Python','Speech recognition','Text-to-speech','External APIs']},
symbiosys:{category:'Internship',number:'02 / SYMBIOSYS TECHNOLOGIES',title:'From design to interface.',subtitle:'UI/UX & Web Development Intern',intro:'Working across interface design and front-end implementation.',heading:'Contributions',points:['Designed responsive web interfaces using Figma.','Collaborated on front-end implementation with ReactJS.','Worked with the development team to improve user experience and translate design concepts into functional web pages.'],tags:['Figma','ReactJS','Responsive design','UI/UX']},
android:{category:'Internship',number:'03 / 1STOP DEVCLUB (IIT DELHI)',title:'Built for the small screen.',subtitle:'Android Development Intern',intro:'Developing mobile applications and connecting them with useful information through APIs.',heading:'Contributions',points:['Developed Android applications using Kotlin and REST APIs.','Built news and weather applications as internship projects.','Improved application stability through testing and debugging.'],tags:['Kotlin','Android','REST APIs','Testing']},
iga:{category:'Certification',number:'01 / SAVIYNT',title:'Saviynt Advanced IGA',subtitle:'Advanced IGA Professional',certificate:{file:'Saviynt-Advanced-IGA',issued:'September 18, 2025'},intro:'A professional certification in the identity governance domain that complements my hands-on work with Saviynt EIC.',heading:'Related experience',points:['Identity Governance & Administration','Identity lifecycle and access request management','Access certifications and governance operations'],tags:['Saviynt','IGA']},
aag:{category:'Certification',number:'02 / SAVIYNT',title:'Saviynt AAG',subtitle:'AAG Professional',certificate:{file:'Saviynt-AAG',issued:'August 21, 2026'},intro:'A Saviynt professional certificate listed among my identity and access management credentials.',tags:['Saviynt','AAG']},
google:{category:'Certification',number:'03 / GOOGLE · COURSERA',title:'Google Data Analytics',subtitle:'Professional Certificate',intro:'Continued learning in data analytics alongside my computer science and IAM experience.',tags:['Google','Data analytics','Coursera']},
accenture:{category:'Job simulation',number:'04 / ACCENTURE · FORAGE',title:'Data Analytics & Visualization',subtitle:'Accenture Job Simulation · Forage',intro:'A learning experience in data analytics and visualization, completed through Forage.',tags:['Accenture','Data analytics','Visualization','Forage']}
};
const dialog=document.querySelector('#detail-dialog');let previousFocus;let previousOverflow='';
function element(tag,text,className){const e=document.createElement(tag);e.textContent=text;if(className)e.className=className;return e;}
function appendCertificate(content,d){
  const cert=d.certificate;
  content.append(element('p',`Issued ${cert.issued}`,'certificate-issued'));
  const preview=element('a','','certificate-preview');
  preview.href=`${cert.file}.pdf`;preview.target='_blank';preview.rel='noopener';
  preview.setAttribute('aria-label',`Open ${d.title} certificate PDF in a new tab`);
  const image=document.createElement('img');image.src=`${cert.file}.png`;
  image.alt=`Vedesh Emandi — ${d.subtitle} certificate, issued ${cert.issued}`;
  preview.append(image);content.append(preview);
  const actions=element('div','','certificate-actions');
  const open=element('a','Open PDF ↗','button');open.href=preview.href;open.target='_blank';open.rel='noopener';
  const download=element('a','Download certificate ↓','button');download.href=preview.href;download.download=`${cert.file}.pdf`;
  [open,download].forEach(control=>{applyGlass(control);actions.append(control);});
  content.append(actions);
}
document.querySelectorAll('[data-detail]').forEach(button=>button.addEventListener('click',()=>{const d=details[button.dataset.detail];if(!d)return;previousFocus=button;document.querySelector('#detail-category').textContent=d.category;document.querySelector('#detail-number').textContent=d.number;document.querySelector('#detail-title').textContent=d.title;document.querySelector('#detail-subtitle').textContent=d.subtitle;const content=document.querySelector('#detail-content');content.replaceChildren(element('p',d.intro));dialog.classList.toggle('certificate-dialog',!!d.certificate);if(d.certificate)appendCertificate(content,d);if(d.heading)content.append(element('h3',d.heading));if(d.points){const list=document.createElement('ul');d.points.forEach(p=>list.append(element('li',p)));content.append(list);}if(d.tags){const tags=element('div','','tags');tags.style.marginTop='28px';d.tags.forEach(t=>tags.append(element('span',t)));content.append(tags);}previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();dialog.scrollTop=0;document.querySelector('.close-dialog').focus();}));
dialog.querySelectorAll('.close-dialog,.close-text').forEach(b=>b.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;previousFocus?.focus();});
let toastTimer;function toast(text){const t=document.querySelector('#toast');t.textContent=text;t.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('visible'),3200);}
document.querySelector('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('vedeshemandi@gmail.com');toast('Email address copied.');}catch{toast('Email: vedeshemandi@gmail.com');}});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('.wave i').forEach((bar,i)=>{bar.style.setProperty('--height',String(8+72*Math.pow(Math.sin(i*.72),2)*Math.sin(Math.PI*(i+1)/26)));bar.style.setProperty('--i',String(i));});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>=.08){e.target.classList.add('visible');}else if(!e.isIntersecting){e.target.classList.remove('visible');}}),{threshold:[0,.08]});document.querySelectorAll('.about-grid,.section-heading,.experience-card,.stats-grid,.skill-card,.project-card,.internship-card,.credential-grid,.contact-grid').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}

const contactDialog=document.querySelector('#contact-dialog');
const sayHello=document.querySelector('#say-hello');
let contactOverflow='';
sayHello.addEventListener('click',()=>{contactOverflow=document.body.style.overflow;document.body.style.overflow='hidden';contactDialog.showModal();document.querySelector('#close-contact').focus();});
document.querySelector('#close-contact').addEventListener('click',()=>contactDialog.close());
contactDialog.addEventListener('click',e=>{if(e.target===contactDialog){const r=contactDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)contactDialog.close();}});
contactDialog.addEventListener('close',()=>{document.body.style.overflow=contactOverflow;sayHello.focus();});

// Preserve native downloads and make their otherwise silent response visible.
document.querySelectorAll('a[download]').forEach(link=>link.addEventListener('click',()=>{
  document.querySelector('#resume-feedback').hidden=false;
  toast('Download requested — check your browser’s downloads.');
}));
// Local light follows the pointer without moving the button or its text.
const glassControls=document.querySelectorAll('button,.button,.header-contact,.contact-option,a[download]');
function applyGlass(control){
  control.classList.add('glass-control');
  const positionGlow=event=>{
    if(event.pointerType==='touch')return;
    const bounds=control.getBoundingClientRect();
    control.style.setProperty('--glow-x',`${event.clientX-bounds.left}px`);
    control.style.setProperty('--glow-y',`${event.clientY-bounds.top}px`);
  };
  control.addEventListener('pointerenter',positionGlow);
  control.addEventListener('pointermove',positionGlow);
  // Keep the last position during fade-out: resetting it would flash the center.

}
glassControls.forEach(applyGlass);

// Preview a connection on hover/focus; native buttons open its detail flyout.
const ecosystem=document.querySelector('.identity-map');
const mapNodes=[...ecosystem.querySelectorAll('.map-node')];
const mapCaption=document.querySelector('#map-caption');
const mapIndex=ecosystem.querySelector('.map-index');
const coreCaption=ecosystem.querySelector('.map-core small');
const mapCopy={governance:['01 / 04','GOVERNANCE','Saviynt EIC governs the identity lifecycle.'],directory:['02 / 04','INTEGRATION','Active Directory connects identities with accounts.'],policy:['03 / 04','ACCESS CONTROL','RBAC connects roles with appropriate permissions.'],review:['04 / 04','ACCESS REVIEWS','Certifications help review existing access.']};
let hoveredNode=null;
function updateMap(){
  const focused=mapNodes.find(node=>node===document.activeElement);
  const active=hoveredNode||focused;
  const key=active?.dataset.map;
  ecosystem.dataset.active=key||'';
  mapNodes.forEach(node=>node.classList.toggle('map-active',node===active));
  mapIndex.textContent=key?mapCopy[key][0]:'EXPLORE';
  coreCaption.textContent=key?mapCopy[key][1]:'AT THE CENTER.';
  mapCaption.textContent=key?mapCopy[key][2]:'Choose a node to explore how it connects.';
}
mapNodes.forEach(node=>{
  node.addEventListener('pointerenter',()=>{hoveredNode=node;updateMap();});
  node.addEventListener('pointerleave',()=>{hoveredNode=null;updateMap();});
  node.addEventListener('focus',updateMap);
  node.addEventListener('blur',()=>{queueMicrotask(updateMap);});
});
