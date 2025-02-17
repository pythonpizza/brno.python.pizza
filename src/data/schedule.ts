export type Event = {
  label?: string;
  name?: string;
  title?: string;
  photo?: string;
  link?: string;
  when?: string;
};

export const SCHEDULE: Event[] = [
  {
    label: "Doors Open",
    title: "Open Doors",
    when: "2025/02/22 9:30 AM UTC+1",
  },
  {
    label: "Opening Session",
    title: "Opening Session",
    when: "2025/02/22 10:00 AM UTC+1",
  },
  {
    title: "Random, but not really: How computers generate numbers for different purposes",
    name: "Lumír Balhar",
    when: "2025/02/22 10:12 AM UTC+1",
    photo: "speakers/lumir_balhar.jpg",
  },
  {
    title: "You shall not burn-out",
    name: "Nela Slezáková",
    when: "2025/02/22 10:24 AM UTC+1",
    photo: "speakers/nela_slezakova.png",
  },
  {
    title: "Autogen library for easy LLM agents creation",
    name: "Samuel Fabo",
    when: "2025/02/22 10:36 AM UTC+1",
    photo: "speakers/samuel_fabo.png",
  },
  {
    title: "Writing Pythonic Code in C#",
    name: "Dmitry Osipov",
    when: "2025/02/22 10:48 AM UTC+1",
    photo: "speakers/dmitry_osipov.jpg",
  },
  {
    label: "Coffee Break",
    title: "Coffee Break",
    when: "2025/02/22 11:00 AM UTC+1"
  },
  {
    title: "Time hacks for better focus and balance",
    name: "Sarka Jana Janderkova",
    when: "2025/02/22 11:24 AM UTC+1",
    photo: "speakers/sarka_jana_janderkova.png",
  },
  {
    title: "Entity-Component-Systems in Python: Is it worth it?",
    name: "Lukáš Ševčík",
    when: "2025/02/22 11:36 AM UTC+1",
    photo: "speakers/lukas_sevcik.jpg",
  },
  {
    title: "Simplify your DevOps life with Python",
    name: "Tetiana Kukhelna",
    when: "2025/02/22 11:48 AM UTC+1",
    photo: "speakers/tetiana_kukhelna.png",
  },
  {
    title: "Crawlee: A web scraping and browser automation library",
    name: "Vláďa Dušek",
    when: "2025/02/22 12:00 PM UTC+1",
    photo: "speakers/vlada_dusek.jpg",
  },
  {
    title: "Kill GIL: How Python 3.13 Changes Concurrent Programming",
    name: "Darius Kryszczuk",
    when: "2025/02/22 12:12 PM UTC+1",
    photo: "speakers/pizza-square.png"
  },
  {
    label: "Lunch Break",
    title: "Lunch Break",
    when: "2025/02/22 12:24 PM UTC+1"
  },
  {
    title: "Counting Sheep, Pythonized",
    name: "Miroslav Šedivý",
    when: "2025/02/22 1:24 PM UTC+1",
    photo: "speakers/miro_sedivy.png",
  },
  {
    title: "How do we read genomes?",
    name: "Martina Zátopková",
    when: "2025/02/22 1:36 PM UTC+1",
    photo: "speakers/martina_zatopkova.png",
  },
  {
    title: "Efficient Custom LLM Kernels using Triton",
    name: "Matej Sirovatka",
    when: "2025/02/22 1:48 PM UTC+1",
    photo: "speakers/matej_sirovatka.jpg",
  },
  {
    title: "Reacting quickly with topic based message brokers",
    name: "Tim Hobbs",
    when: "2025/02/22 2:00 PM UTC+1",
    photo: "speakers/tim_hobbs.png",
  },
  {
    title: "Neurodiversity. Why should every IT professional know that word?",
    name: "Amelia Walter-Dzikowska",
    when: "2025/02/22 2:12 PM UTC+1",
    photo: "speakers/amelia_walter-dzikowska.jpg",
  },
  {
    label: "Coffee Break",
    title: "Coffee Break",
    when: "2025/02/22 2:24 PM UTC+1"
  },
  {
    title: "My log has something to tell you",
    name: "Honza Kral",
    when: "2025/02/22 2:48 PM UTC+1",
    photo: "speakers/honza_kral.jpg",
  },
  {
    title: "Documentation that is always right",
    name: "Robert Batůšek",
    when: "2025/02/22 3:00 PM UTC+1",
    photo: "speakers/robert_batusek.png",
  },
  {
    title: "Bridging the Gap: IT Managers and IT Communities in Hiring",
    name: "Barbora Holusova",
    when: "2025/02/22 3:12 PM UTC+1",
    photo: "speakers/bara_holusova.jpg",
  },
  {
    title: "Building Web Framework in 2024: HTML Components with Pure Python and Typing",
    name: "Pavel Dedík",
    when: "2025/02/22 3:24 PM UTC+1",
    photo: "speakers/pavel_dedik.jpg",
  },
  {
    title: "Why I choose python as backend for my iOS apps",
    name: "Yazan Ghunaim",
    when: "2025/02/22 3:36 PM UTC+1",
    photo: "speakers/yazan_ghunaim.jpg",
  },
  {
    label: "Short Break",
    title: "Short Break",
    when: "2025/02/22 3:48 PM UTC+1"
  },
  {
    title: "🐛",
    name: "Mia Bajić",
    when: "2025/02/22 4:00 PM UTC+1",
    photo: "speakers/mia_bajic.png",
  },
  {
    title: "How to connect with complete strangers?",
    name: "Nofar Drukman",
    when: "2025/02/22 4:12 PM UTC+1",
    photo: "speakers/nofar_drukman.jpg",
  },
  {
    title: "▃█▅ Terminal plotting",
    name: "Jan Pipek",
    when: "2025/02/22 4:24 PM UTC+1",
    photo: "speakers/jan_pipek.png",
  },
  {
    title: "How to combine tiny bits of Python, physics, and art to create (hopefully) pretty pictures",
    name: "Christian Leitold",
    when: "2025/02/22 4:36 PM UTC+1",
    photo: "speakers/christian_leitold.jpg",
  },
  {
    label: "Community Announcements",
    title: "Community Announcements",
    when: "2025/02/22 4:48 PM UTC+1"
  },
  {
    label: "Closing Session",
    title: "Closing Session",
    when: "2025/02/22 5:00 PM UTC+1"
  },
  {
    label: "Network & Chill",
    title: "Network & Chill",
    when: "2025/02/22 5:12 PM UTC+1",
  },
  {
    label: "The End",
    title: "The End",
    when: "2025/02/22 6:00 PM UTC+1"
  },
];
