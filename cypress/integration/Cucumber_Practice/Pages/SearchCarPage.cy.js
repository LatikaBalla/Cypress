export class SearchCarPage
{
   Search_Country='#country'
   Search_City='#city'
   Search_ModelName='#model'
   Search_PickupDate='#pickup'
   Search_DropoffDate='#dropoff'
   Search_Button='.btn'
    
navigate(url)
{
    cy.visit(url)
    
}
SelectCountry( country)
{
   // cy.get('#country').select('France').should('have.value','3')
    cy.get( this.Search_Country).select(country)
    
}
SelectCity(city)
{
    cy.get(this.Search_City).select(city)
}
enterModelName(name)
{
    cy.get(this.Search_ModelName).type(name)
}

enterPickupDate(pickup)
{
    cy.get(this.Search_PickupDate).type(pickup)
}

enterDropoffDate(dropoff)
{
    cy.get(this.Search_DropoffDate).type(dropoff)
}
clickonSearchButton()
{
    cy.get(this.Search_Button,{timeout:6000}).click()
}
SelectCarandClickRent(no)
{
    cy.get("a").each($a=>{
        const message=$a.text();
        expect($a, message).to.have.attr("href")
        //.not.contain("undefined");
    });
    
    cy.get(':nth-child('+no+') > :nth-child(7) > .btn',{timeout:7000}).click()
    
}
}
export default SearchCarPage