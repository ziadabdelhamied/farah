// عدّل الصور والتواريخ والكلام من القوائم دي فقط.
const memories = [
  { date: "18 فبراير 2025", title: "بداية حكايتنا", description: "اليوم اللي بدأت فيه حكاية غالية على قلبي.", image: "photos/memory-1.jpg" },
  { date: "اكتب التاريخ هنا", title: "ذكرى مميزة", description: "اكتب هنا حكاية الصورة أو إيه اللي كان مميز في اليوم ده.", image: "photos/memory-2.jpg" },
  { date: "اكتب التاريخ هنا", title: "ضحكتنا المفضلة", description: "ضيف صورة تانية واكتب تعليق صغير من ذكرياتكم.", image: "photos/memory-3.jpg" },
  { date: "اكتب التاريخ هنا", title: "يوم مش هنساه", description: "كل صورة بتفكرني بتفصيلة حلوة عشناها سوا.", image: "photos/memory-4.jpg" },
  { date: "اكتب التاريخ هنا", title: "تفاصيل صغيرة", description: "ممكن تكون صورة عادية، بس معناها كبير عندنا.", image: "photos/memory-5.jpg" },
  { date: "اكتب التاريخ هنا", title: "واللي جاي أحلى", description: "مكان لذكرى جديدة لسه هتعيشوها مع بعض.", image: "photos/memory-6.jpg" }
];

const chapters = [
  { date: "18 FEB 2025", title: "أول صفحة في حكايتنا", description: "من هنا بدأت حكايتنا. عدّل الوصف ده واكتب تفاصيل اليوم بطريقتك." },
  { date: "تاريخ تاني", title: "ذكرى تستاهل تتحكي", description: "ضيف هنا موقف أو يوم مهم بالنسبالكم، وخلي التواريخ بترتيبها." },
  { date: "تاريخ تالت", title: "لسه بنكتب الحكاية", description: "المحطات الجاية لسه مستنيانا، وأجمل ذكرياتنا لسه قدامنا." }
];

const memoryGrid = document.getElementById("memoryGrid");
memories.forEach((item) => {
  const card = document.createElement("article");
  card.className = "memory-card";
  const imageBox = document.createElement("div");
  imageBox.className = "memory-image";
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  img.loading = "lazy";
  const fallback = document.createElement("div");
  fallback.className = "fallback";
  fallback.innerHTML = '<span>♡</span><b>حط صورتكم هنا</b><small>' + item.image + '</small>';
  img.onerror = () => { img.style.display = "none"; imageBox.appendChild(fallback); };
  imageBox.appendChild(img);
  const date = document.createElement("div"); date.className = "memory-date"; date.textContent = item.date;
  const title = document.createElement("h3"); title.className = "memory-title"; title.textContent = item.title;
  const description = document.createElement("p"); description.className = "memory-description"; description.textContent = item.description;
  card.append(imageBox, date, title, description);
  memoryGrid.appendChild(card);
});

const timeline = document.getElementById("timelineList");
chapters.forEach((chapter) => {
  const item = document.createElement("article"); item.className = "timeline-item";
  const dot = document.createElement("span"); dot.className = "timeline-dot";
  const date = document.createElement("div"); date.className = "timeline-date"; date.textContent = chapter.date;
  const title = document.createElement("h3"); title.textContent = chapter.title;
  const description = document.createElement("p"); description.textContent = chapter.description;
  item.append(dot, date, title, description); timeline.appendChild(item);
});

// عداد الأيام منذ 18 فبراير 2025.
const startDate = new Date(2025, 1, 18);
const today = new Date(); today.setHours(0,0,0,0);
const days = Math.max(0, Math.floor((today - startDate) / 86400000));
document.getElementById("daysTogether").textContent = days.toLocaleString("en-US");

const audio = document.getElementById("ourMusic");
const toggle = document.getElementById("musicToggle");
const label = document.getElementById("musicLabel");
const icon = document.getElementById("musicIcon");
toggle.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      toggle.classList.add("playing");
      toggle.setAttribute("aria-pressed", "true");
      label.textContent = "وقّف الموسيقى";
      icon.textContent = "Ⅱ";
    } catch (error) {
      label.textContent = "ضيف ملف الموسيقى";
      alert("حط ملف MP3 باسم our-song.mp3 جوه مجلد music، وبعدها جرّب تاني.");
    }
  } else {
    audio.pause();
    toggle.classList.remove("playing");
    toggle.setAttribute("aria-pressed", "false");
    label.textContent = "شغّل موسيقانا";
    icon.textContent = "♫";
  }
});
