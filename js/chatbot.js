// Chatbot navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing chatbot...');
    
    const chapterButton = document.getElementById('chapterButton');
    const ctaeButton = document.getElementById('ctaeButton');
    const aboutButton = document.getElementById('aboutButton');
    const chat = document.getElementById("chat");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const servicesArea = document.getElementById("servicesArea");
    const quickBtns = document.getElementById("quickBtns");

    console.log('Elements found:', {
        chapterButton: !!chapterButton,
        ctaeButton: !!ctaeButton,
        aboutButton: !!aboutButton,
        chat: !!chat,
        userInput: !!userInput,
        sendBtn: !!sendBtn,
        servicesArea: !!servicesArea,
        quickBtns: !!quickBtns
    });
    
    // Navigation button event listeners
    if (chapterButton) {
        chapterButton.addEventListener('click', function() {
            window.location.href = '../chapter/chapter.html';
        });
    }
    
    if (ctaeButton) {
        ctaeButton.addEventListener('click', function() {
            window.location.href = '../ctae/ctae.html';
        });
    }
    
    if (aboutButton) {
        aboutButton.addEventListener('click', function() {
            window.location.href = '../about/about.html';
        });
    }

    // Forsyth County, GA-focused resource list (real links).
    const SERVICES = [
        {
          id: "housing",
          keywords: ["housing","homeless","shelter","eviction","rent","staying","couch","foreclosure"],
          title: "Housing / Homelessness Help (Forsyth & Nearby)",
          description: "Family Promise of Forsyth County supports families facing homelessness and housing instability. The Place also helps with essential needs and navigation.",
          links: [
            { label: "Family Promise of Forsyth County", url: "https://www.fpforsyth.org/" },
            { label: "The Place of Forsyth (assistance)", url: "https://www.theplacega.org/" },
            { label: "United Way 2-1-1 (search local housing help)", url: "https://www.211.org/" }
          ]
        },
        {
          id: "food",
          keywords: ["food","meals","food pantry","pantry","hunger","groceries","snack","eat"],
          title: "Food Assistance (Pantries & Meals)",
          description: "Local pantries and meal programs in/near Forsyth County. You can also use 2-1-1 to find options closest to your address.",
          links: [
            { label: "Georgia Mountain Food Bank – Forsyth County list", url: "https://www.gamountainfoodbank.org/how-we-feed/feeding-partners/find-an-agency-near-you/forsyth-county/" },
            { label: "Meals By Grace (Forsyth/Dawson)", url: "https://mealsbygrace.org/" },
            { label: "The Place of Forsyth", url: "https://www.theplacega.org/" }
          ]
        },
        {
          id: "mental",
          keywords: ["mental","depress","depression","anxiety","panic","therapy","counseling","counsellor","counselor","crisis","suicide","self harm","self-harm"],
          title: "Mental Health & Crisis Support (24/7)",
          description: "If you or someone you know is in crisis, help is available 24/7. For non-emergency support, Georgia's crisis system can connect you to local services.",
          links: [
            { label: "Call/Text 988 (crisis support)", url: "https://988lifeline.org/" },
            { label: "Georgia Crisis & Access Line (GCAL) info", url: "https://dbhdd.georgia.gov/be-dbhdd/be-supported/mental-health-adults/adult-mental-health-crisis-services" },
            { label: "United Way 2-1-1 (find counseling/resources)", url: "https://www.211.org/" }
          ]
        },
        {
          id: "substance",
          keywords: ["drug","drugs","alcohol","addiction","substance","rehab","detox","overdose","opioid"],
          title: "Substance Use & Recovery",
          description: "Georgia crisis services and 2-1-1 can help connect you to local treatment and recovery support.",
          links: [
            { label: "Georgia DBHDD", url: "https://dbhdd.georgia.gov/" },
            { label: "United Way 2-1-1 (treatment referrals)", url: "https://www.211.org/" }
          ]
        },
        {
          id: "domestic",
          keywords: ["domestic","abuse","violence","partner","safe","restraining","stalking"],
          title: "Domestic Violence / Safe Shelter",
          description: "Confidential help, crisis support, and referrals for safety planning and shelter in Forsyth County.",
          links: [
            { label: "Family Haven (Forsyth County)", url: "https://familyhavenforsyth.org/" },
            { label: "Georgia Coalition Against Domestic Violence", url: "https://gcadv.org/" }
          ]
        },
        {
          id: "elder",
          keywords: ["elder","senior","aging","grandparent","retirement","caregiver","caregiving"],
          title: "Senior Services (Forsyth County)",
          description: "Forsyth County Senior Services offers programs and support for older adults, including activities and resources.",
          links: [
            { label: "Forsyth County Senior Services", url: "https://www.forsythco.com/senior-services" },
            { label: "GA Division of Aging Services", url: "https://aging.georgia.gov/" }
          ]
        },
        {
          id: "child",
          keywords: ["child","children","kid","kids","neglect","child abuse","cps","foster"],
          title: "Child & Family Services (DFCS)",
          description: "For child protection and family support resources in Forsyth County, GA DFCS can help. If a child is in immediate danger, call 911.",
          links: [
            { label: "Forsyth County DFCS location", url: "https://dfcs.georgia.gov/locations/forsyth-county-0" },
            { label: "Report child abuse/neglect (GA DFCS)", url: "https://dfcs.georgia.gov/services/child-abuse-neglect" }
          ]
        },
        {
          id: "animals",
          keywords: ["animal","pet","dog","cat","animal control","lost dog","lost cat","stray"],
          title: "Animal Services (Forsyth County, GA)",
          description: "Help for animal control, lost/found pets, adoption, and pet resources in Forsyth County.",
          links: [
            { label: "Forsyth County Pet Adoption & Resource Center (PARC)", url: "https://www.forsythsheriff.org/parc" },
            { label: "Forsyth Sheriff Animal Control", url: "https://www.forsythsheriff.org/animalcontrol" },
            { label: "Forsyth County Pet Resource Center (county site)", url: "https://www.forsythco.com/Departments-Offices/Pet-Adoption-and-Resource-Center/Adopt" }
          ]
        },
        {
          id: "utilities",
          keywords: ["water","electric","utility","heat","power","gas","bills","shutoff","disconnect"],
          title: "Utility / Energy Bill Assistance",
          description: "LIHEAP may help eligible households with heating/cooling energy bills. Local community action agencies administer applications.",
          links: [
            { label: "Georgia LIHEAP info (DHS/DFCS)", url: "https://dfcs.georgia.gov/services/low-income-home-energy-assistance-program-liheap" },
            { label: "North Georgia Community Action – Energy Assistance", url: "https://www.ngcainc.com/energy-assistance" },
            { label: "United Way 2-1-1 (utility help)", url: "https://www.211.org/" }
          ]
        },
        {
          id: "legal",
          keywords: ["legal","law","court","tenant","rights","divorce","custody","immigration","eviction notice"],
          title: "Legal Help (Free/Low-Cost)",
          description: "Georgia Legal Aid and Georgia Legal Services can help with civil legal issues and point you to local assistance.",
          links: [
            { label: "GeorgiaLegalAid.org", url: "https://www.georgialegalaid.org/" },
            { label: "Georgia Legal Services Program (GLSP)", url: "https://www.glsp.org/" }
          ]
        }
    ];

    const QUICK = [
        "Housing", "Food", "Mental Health", "Substance Use",
        "Domestic Violence", "Seniors", "Child Protection",
        "Animal Services", "Utilities", "Legal Help"
    ];

    function escapeHtml(str){
        return String(str).replace(/[&<>"']/g, (m) => ({
          "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
        }[m]));
    }

    function addMessage(text, who="bot"){
        const outer = document.createElement("div");
        outer.className = "msg " + (who === "user" ? "user" : "");
        const b = document.createElement("div");
        b.className = "bubble " + (who === "user" ? "user" : "");
        b.textContent = text;
        outer.appendChild(b);
        chat.appendChild(outer);
        chat.scrollTop = chat.scrollHeight;
    }

    function safeOpen(url){
        try{
          window.open(url, "_blank", "noopener,noreferrer");
        }catch(e){
          window.location.href = url;
        }
    }

    function showServiceCard(s){
        const el = document.createElement("div");
        el.className = "service";

        const title = `<h3>${escapeHtml(s.title)}</h3>`;
        const desc  = `<p>${escapeHtml(s.description)}</p>`;

        const links = (s.links || []).map(l => {
          const url = String(l.url || "").trim();
          const label = escapeHtml(l.label || "Open link");
          return `<div style="margin-top:6px">
            <a href="${url}" target="_blank" rel="noopener noreferrer" data-open="${url}">${label} →</a>
          </div>`;
        }).join("");

        el.innerHTML = title + desc + links;

        el.querySelectorAll("a[data-open]").forEach(a => {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            const url = a.getAttribute("data-open");
            if(url) safeOpen(url);
          });
        });

        servicesArea.appendChild(el);
    }

    function findMatches(text){
        const t = text.toLowerCase();
        const matches = new Map();

        for(const s of SERVICES){
          for(const kw of s.keywords){
            if(t.includes(kw)){
              matches.set(s.id, s);
              break;
            }
          }
        }
        return Array.from(matches.values());
    }

    // Greeting detection: respond "Hi!" when user greets in any manner.
    function isGreeting(text){
        const t = text.trim().toLowerCase();

        // Common greetings + variations
        const greetingRegex =
          /^(hi+|hello+|hey+|hiya+|howdy+|yo+|sup|what'?s up|good (morning|afternoon|evening)|greetings)\b/;

        // Catch messages that are basically just a greeting (with punctuation/emojis)
        const onlyGreetingRegex =
          /^(hi+|hello+|hey+|hiya+|howdy+|yo+|sup|what'?s up|good (morning|afternoon|evening)|greetings)[\s!,.?🙂🙃😀😄😁😅🤣😊😉😍🥳🎉]*$/;

        return greetingRegex.test(t) || onlyGreetingRegex.test(t);
    }

    function handleInput(raw){
        const txt = raw.trim();
        if(!txt) return;

        // Always show user's message
        addMessage(txt, "user");
        userInput.value = "";
        servicesArea.innerHTML = "";

        // If user greets, chatbot greets back
        if(isGreeting(txt)){
          addMessage("Hi! How can I help you today in Forsyth County, GA? You can say something like \"food pantry\", \"rent help\", \"power bill\", \"counseling\", or click a quick button below.");
          return;
        }

        const matches = findMatches(txt);

        if(matches.length){
          addMessage("Here are Forsyth County, GA–relevant resources that may help:");
          matches.forEach(showServiceCard);

          if(matches.some(m => m.id === "mental")){
            addMessage("If this is urgent or you feel unsafe, call 911. You can also call or text 988 for 24/7 support.");
          }
        } else {
          addMessage("I couldn't find an exact match, but these are good starting points for Forsyth County, GA:");
          showServiceCard({
            title: "United Way 2-1-1",
            description: "Search or call for local help with food, housing, utilities, health, and more.",
            links: [{label:"Open 211.org", url:"https://www.211.org/"}]
          });
          showServiceCard({
            title: "Forsyth County, GA (Official Site)",
            description: "Find county departments, services, and contact info.",
            links: [{label:"Open Forsyth County site", url:"https://www.forsythco.com/"}]
          });
          addMessage('Try adding a detail like: "rent help", "food pantry", "power bill", "counseling", or "legal aid".');
        }
    }

    // Quick buttons - this is the important part that creates the buttons!
    console.log('Creating quick buttons...');
    if (quickBtns) {
        for(const q of QUICK){
            const b = document.createElement("button");
            b.className = "chip";
            b.type = "button";
            b.textContent = q;
            b.onclick = () => { userInput.value = q; handleInput(q); };
            quickBtns.appendChild(b);
        }
        console.log('Quick buttons created:', QUICK.length);
    } else {
        console.error('quickBtns element not found!');
    }

    if (sendBtn) {
        sendBtn.addEventListener("click", () => handleInput(userInput.value));
    }
    
    if (userInput) {
        userInput.addEventListener("keydown", (e) => {
            if(e.key === "Enter") handleInput(userInput.value);
        });
    }

    // Initial greeting on load
    if (chat) {
        addMessage(
            "Hi! Welcome to the Forsyth County, GA Help Chatbot. Tell me what you need (food, housing, utility bills, mental health, legal help, pet services, etc.) and I'll show local resources + links."
        );
    }

    if (userInput) {
        userInput.focus();
    }

    console.log('Chatbot initialization complete!');
});