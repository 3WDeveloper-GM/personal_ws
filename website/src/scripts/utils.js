export function ParseFloatsFromString(stringArray) {
   var numbersArray = stringArray.match(/\d+(\.\d+)?/g)

   var numbers = numbersArray.map(function (numberString) {
      return parseFloat(numberString, 10)
   })

   return numbers
}
export function unBlurIterative(blurValues, timeStep, iterations) {
   let counter = 0
   let intervalId = window.setInterval(() => {

      let opacityStep = 0.05
      let blurStep = 2
      let newOpacity = (blurValues.opacity < 1)
         ? blurValues.opacity + opacityStep
         : 1
      let newBlur = (blurValues.blur > 0)
         ? blurValues.blur - blurStep
         : 0

      blurValues.opacity = newOpacity
      blurValues.blur = newBlur

      if (++counter === iterations || blurValues.isOn) {
         window.clearInterval(intervalId)
      }
   }, timeStep)
}

export function BlurIterative(blurValues, timeStep, iterations) {
   let counter = 0
   let intervalId = window.setInterval(() => {

      let opacityStep = 0.05
      let blurStep = 1
      let maxBlur = 20
      let minOpacity = 0

      let newOpacity = (blurValues.opacity > minOpacity)
         ? blurValues.opacity - opacityStep
         : minOpacity
      let newBlur = (blurValues.blur < maxBlur)
         ? blurValues.blur + blurStep
         : maxBlur

      blurValues.opacity = newOpacity
      blurValues.blur = newBlur

      if (++counter === iterations || blurValues.isOff) {
         window.clearInterval(intervalId)
      }
   }, timeStep)
}





export function unBlur(blurValues, timeStep, i = 0) {
   if (i < 40) {
      let opacityStep = 0.05
      let blurStep = 2
      let newOpacity = (blurValues.opacity < 1)
         ? blurValues.opacity + opacityStep
         : 1
      let newBlur = (blurValues.blur > 0)
         ? blurValues.blur - blurStep
         : 0

      blurValues.opacity = newOpacity
      blurValues.blur = newBlur

      setTimeout(() => unBlur(blurValues, timeStep, i + 1), timeStep)
   }
}

export function Blur(blurValues, timeStep, i = 0) {
   if (i < 40) {
      let opacityStep = 0.05
      let blurStep = 1
      let maxBlur = 20
      let minOpacity = 0

      let newOpacity = (blurValues.opacity > minOpacity)
         ? blurValues.opacity - opacityStep
         : minOpacity
      let newBlur = (blurValues.blur < maxBlur)
         ? blurValues.blur + blurStep
         : maxBlur

      blurValues.opacity = newOpacity
      blurValues.blur = newBlur

      setTimeout(() => Blur(blurValues, timeStep, i + 1), timeStep)
   }
}


export function textTyping(greetings, text, i = 0) {
   if (i === 0) {
      greetings.splashPhrase = ""
   }
   greetings.splashPhrase += text[i]

   if (i === text.length - 1) {
      return
   }
   setTimeout(() => textTyping(greetings, text, i + 1), 125)
}

export function deleteText(greetings) {
   setTimeout(() => {
      let strLength = greetings.splashPhrase.length
      greetings.splashPhrase = greetings.splashPhrase.slice(0, strLength - 1)
   }, 125)
}

export function DrawChart() {
   var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
         text: "Fortune 500 Companies by Country"
      },
      axisX: {
         interval: 1
      },
      axisY2: {
         interlacedColor: "rgba(1,77,101,.2)",
         gridColor: "rgba(1,77,101,.1)",
         title: "Number of Companies"
      },
      data: [{
         type: "bar",
         name: "companies",
         color: "#014D65",
         axisYType: "secondary",
         dataPoints: [
            { y: 3, label: "Sweden" },
            { y: 7, label: "Taiwan" },
            { y: 5, label: "Russia" },
            { y: 9, label: "Spain" },
            { y: 7, label: "Brazil" },
            { y: 7, label: "India" },
            { y: 9, label: "Italy" },
            { y: 8, label: "Australia" },
            { y: 11, label: "Canada" },
            { y: 15, label: "South Korea" },
            { y: 12, label: "Netherlands" },
            { y: 15, label: "Switzerland" },
            { y: 25, label: "Britain" },
            { y: 28, label: "Germany" },
            { y: 29, label: "France" },
            { y: 52, label: "Japan" },
            { y: 103, label: "China" },
            { y: 134, label: "US" }
         ]
      }]
   });
   chart.render();

}



export function getDelayTimes(blockAmount, delayStep, offset) {
   let delaysArray = new Array(blockAmount)
   for (let index = 0; index < blockAmount; index++) {
      delaysArray[index] = (index % 3) * delayStep + offset
   }
   return delaysArray
}

export function setDelayTimes(element, delayStep, offset) {
   let childNodesAmount = element.length
   console.log(childNodesAmount)

   let delaysArray = getDelayTimes(childNodesAmount, delayStep, offset)
   for (let index = 0; index < childNodesAmount; index++) {
      element[index].style.animationDelay = `${delaysArray[index]}ms`
   }
   let nextOffset = Math.max(...delaysArray)
   return nextOffset
}


