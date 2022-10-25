import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('people', 'PeopleController')
})

Route.group(() => {
  Route.resource('users', 'UsersController')
})

Route.group(() => {
  Route.resource('professionals', 'ProfessionalsController')
})

Route.group(() => {
  Route.resource('clients', 'ClientsController')
})

Route.group(() => {
  Route.resource('demand-types', 'DemandTypesController')
})
