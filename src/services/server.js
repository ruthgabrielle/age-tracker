import { createServer, Model } from 'miragejs'

export function makeServer(){
const server = createServer({
    
  models: {
    info: Model
  },

  seeds(server){
    server.db.loadData({
      infos: [
        { "id": "1", "firstName": "Ruth Gomes", "age": 22 },
        { "id": "2", "firstName": "Sarah Frozen", "age": 25 },
        { "id": "3", "firstName": "Artur Veiga", "age": 30 }
      ]
    })
  },

    routes(){
        this.namespace = 'api'

        this.get('/infos', () => {
            return this.schema.all('info')
        })

        this.post('/infos', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('info', data)
          })
    }
})
return server
}