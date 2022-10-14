from flask import Flask # o sistema é todo baseado nessa classe Flask

app = Flask(__name__) # app é uma instancia da classe Flask 


@app.route('/')#decorator aplica uma função em cima de outra definindo uma rota para pagina
def index():
    return "Hello World!"

if __name__ =="__main__": #verifica se o usuario esta executando o arquivo principal
    app.run()


