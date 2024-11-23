const facts = [
    "Crows: Crows are known to hold grudges. They can remember human faces and have been observed to mob people who have wronged them in the past.",
    "Dolphins: Dolphins have been observed using tools. They use marine sponges to protect their snouts while foraging on the seafloor.",
    "Capuchin Monkeys: These monkeys have a peculiar habit of urinating on their hands and rubbing it on their bodies, which is believed to be a form of social communication or to attract mates.",
    "Pufferfish: Male pufferfish create intricate and beautiful patterns in the sand on the ocean floor to attract females.",
    "Bowerbirds: Male bowerbirds build elaborate structures, called bowers, and decorate them with colorful objects to attract females.",
    "Octopuses: Some octopuses have been observed collecting coconut shells and using them as portable shelters.",
    "Honeybees: Honeybees perform a waggle dance to communicate the location of food sources to other bees in the hive.",
    "Penguins: Male penguins propose to females by presenting them with a pebble. If the female accepts, she places it in her nest.",
    "Elephants: Elephants have been known to mourn their dead, showing behaviors such as touching the bones and staying with the deceased for extended periods.",
    "Albatrosses: These birds have complex courtship dances that involve synchronized movements and vocalizations to strengthen pair bonds."
];

document.getElementById('new-fact-button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
