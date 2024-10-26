const Template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Server Status | Skin AI</title>
    <style>
      body {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .container {
        width: 40vw;
        height: 40vh;
        background-color: #CCFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }
    </style>
    
  </head>
  <body>
    <div class="container ">
      <h1>Server is running</h1>
      <p id="tag"></p>
    </div>
    <script>
    let tag = document.getElementById('tag')
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    tag.innerHTML = hours + " : " + minutes
    </script>
  </body>
</html>
`;
module.exports = Template;
