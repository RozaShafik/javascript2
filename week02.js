function doubleOddNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
      }
    }
    return newNumbers;
  }
  
  const myNumbers = [1, 2, 3, 4];
 // console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
 //1.1
  const oddNumbers=myNumbers.filter(myNumbers=>myNumbers % 2 !== 0);
  document.write("double odd numbers:"+oddNumbers);
//1.2
const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    }
  ];
  
  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];
  //map
  let mondayDurationInHours=monday.map(duration=>duration/60);
  document.write("the duration in hours"+mondayDurationInHours);
  let tusedayDurationInHours=tuesday.map(duration=>duration/60);
  document.write("the duration in hours"+tusedayDurationInHours);
  //filter
  let mondayLessThan2Hours=monday.filter(duration=>duration>120);
  document.write("less than 2 hours:"+mondayLessThan2Hours);
  let tusedayLessThan2Hours=tuesday.filter(duration=>duration>120);
  document.write("less than 2 hours:"+tusedayLessThan2Hours);
//60*20$
    let ratePerHourM=mondayDurationInHours.map(duration=>duration*20);
    document.write("the rate per hour="+ratePerHourM);
    let ratePerHourT=tusedayDurationInHours.map(duration=>duration*20);
    document.write("the rate per hour="+ratePerHourT);

//cent
let cent=0;
document.write(ratePerHourM+cent);
document.write(ratePerHourT+cent);

