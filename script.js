const experience = [
  {
    title: "Front-End Developer — Dropbox",
    date: "Mar. 2020 - Present",
    content: "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
  },

  {
    title: "Visual Designer — OutboundEngine",
    date: "Sept. 2017 - Mar. 2020",
    content: "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
  },

  {
    title: "Lead Designer — Scrypt, Inc.",
    date: "Jun. 2014 - Sept. 2017",
    content: "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
  },

  {
    title: "UI Designer — Pinger Inc.",
    date: "Jun. 2014 - Sept. 2017",
    content: "Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.",
  }
]

var experienceDiv = document.querySelector("#fill");
experienceDiv.innerHTML = "";

for (let i = 0; i < experience.length; i++) {
  experienceDiv.innerHTML += `
        <div class="job">
            <div class="titlePart">
                <h3>${experience[i].title}</h3>
                <p class="date">${experience[i].date}</p>
            </div>
            <p>${experience[i].content}</p>
        </div>
    `
}