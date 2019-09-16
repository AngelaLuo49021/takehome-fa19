from typing import Tuple

from flask import Flask, jsonify, request, Response
import mockdb.mockdb_interface as db

app = Flask(__name__)


def create_response(
    data: dict = None, status: int = 200, message: str = ""
) -> Tuple[Response, int]:
    """Wraps response in a consistent format throughout the API.
    
    Format inspired by https://medium.com/@shazow/how-i-design-json-api-responses-71900f00f2db
    Modifications included:
    - make success a boolean since there's only 2 values
    - make message a single string since we will only use one message per response
    IMPORTANT: data must be a dictionary where:
    - the key is the name of the type of data
    - the value is the data itself

    :param data <str> optional data
    :param status <int> optional status code, defaults to 200
    :param message <str> optional message
    :returns tuple of Flask Response and int, which is what flask expects for a response
    """
    if type(data) is not dict and data is not None:
        raise TypeError("Data should be a dictionary 😞")

    response = {
        "code": status,
        "success": 200 <= status < 300,
        "message": message,
        "result": data,
    }
    return jsonify(response), status


"""
~~~~~~~~~~~~ API ~~~~~~~~~~~~
"""


@app.route("/")
def hello_world():
    return create_response({"content": "hello world!"})


@app.route("/mirror/<name>")
def mirror(name):
    data = {"name": name}
    return create_response(data)

@app.route("/contacts", methods=['GET'])
def get_all_contacts():
    return create_response({"contacts": db.get('contacts')})

@app.route("/shows/<id>", methods=['DELETE'])
def delete_show(id):
    if db.getById('contacts', int(id)) is None:
        return create_response(status=404, message="No contact with this id exists")
    db.deleteById('contacts', int(id))
    return create_response(message="Contact deleted")


# TODO: Implement the rest of the API here!

@app.route("/contacts/<id>", methods=['GET'])
def contacts_show(id):
    if db.getById('contacts', int(id)) is None:
        return create_response(status=404, message="No contact with this id exists")
    
    return create_response({"contact" : db.getById('contacts', int(id))})

@app.route("/contacts/", methods=['GET'])
def contacts_hobby():
    hobby = request.args['hobby'] 
    if db.getByHobby('contacts', hobby) is None:
        return create_response(status=404, message="No contact with this Hobby exists")
    
    return create_response({"hobby" : db.getByHobby('contacts',hobby)})

@app.route("/contacts", methods=['POST'])
def contacts_add():
    data = request.get_json()
    try:
        name = data['name']
    except Exception:
        return create_response(status=422, message="Error: No NAME given")
    try:
        nickname = data['nickname']
    except Exception:
        return create_response(status=422, message="Error: No NICKNAME given")
    try:
        hobby = data['hobby']
    except Exception:
        return create_response(status=422, message="Error: No HOBBY given")
    payload = {'name':name, 'nickname':nickname, 'hobby':hobby}
    db.create('contacts', payload)

    return create_response({"new contact" : db.getLastEntry('contacts')}, status=201)

   return create_response({"update contact" : db.getById('contacts', int(id))})
@app.route("/contacts/<id>", methods=['PUT'])
def contacts_update(id):
    if db.getById('contacts', int(id)) is None:
        return create_response(status=404, message="No contact with this id exists")
    data = request.get_json()
    try:
        name = data['name']
    except Exception:
        return create_response(status=422, message="Error: No NAME given")
    try:
        nickname = data['nickname']
    except Exception:
        return create_response(status=422, message="Error: No NICKNAME given")
    try:
        hobby = data['hobby']
    except Exception:
        return create_response(status=422, message="Error: No HOBBY given")
    change =  {'name':name}
    db.updateById('contacts',id, change)
    return create_response({"update contact" : db.getById('contacts',int(id))})

"""
~~~~~~~~~~~~ END API ~~~~~~~~~~~~
"""
if __name__ == "__main__":
    app.run(port=8080, debug=True)
