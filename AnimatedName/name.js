anime({
  targets: ['.name_container, .first_name, .last_name, path'],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function (el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});