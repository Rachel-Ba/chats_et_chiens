function anneeHumain(humanYears)
{

  if (humanYears == 1 )
  {
    catYears = dogYears = 15
  }
  else if (humanYears == 2 )
  {

  catYears = dogYears = 24

  }
  else
  {
    humanYearsModif = humanYears - 2
    catYears = (humanYearsModif*4)+24
    dogYears = (humanYearsModif*5)+24
  }
  return console.log(humanYears, catYears, dogYears)
}

anneeHumain(4)

function anneeAnimaux(Years)
{

  ownedCat = ownedDog = 0

  if(Years >= 24)
  {
      ownedCat = (Years-24)/4
      ownedCat=ownedCat+2
      ownedCat=Math.round(ownedCat)

      ownedDog = (Years-24)/5
      ownedDog=ownedDog+2
      ownedDog=Math.round(ownedDog)
  }

  else if((Years < 24) && (Years >=15))
  {
    ownedCat=ownedDog=2
  }

  else if(Years < 15)
  {
    ownedCat=ownedDog=1
  }

  return console.log(ownedCat, ownedDog)
}

anneeAnimaux(32)