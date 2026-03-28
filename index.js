
<script>
  let images = [
    "01.png",
    "1.png",
    "2.png",
    "3.png"
  ];

  let i = 0;

  setInterval(() => {
    i++;
    if (i >= images.length) {
      i = 0;
    }
    document.getElementById("slider").src = images[i];
  }, 2000); // 2 second por change hobe
</script>
