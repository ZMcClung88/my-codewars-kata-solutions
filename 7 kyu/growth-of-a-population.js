// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
//
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
//
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
//
// It will need 3 entire years.
// More generally given parameters:
//
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

const nbYear = (p0, percent, aug, p) => {
    let year = 0, currPop = p0;

    while ( currPop < p ) {
      year++; currPop = currPop + (currPop * (percent/100)) + aug;

    }
    return year
}