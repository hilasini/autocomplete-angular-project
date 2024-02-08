from flask import Flask, request, jsonify
from flask_cors import CORS

from letter_trie import SortedLetterTrie

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

letter_tree = SortedLetterTrie()

@app.route('/api/cities', methods=['GET'])
def get_cities():
    prefix = request.args.get('prefix')
    if prefix is None:
        return 'Error: Prefix not provided', 400

    prefix = prefix.lower()
    cities = letter_tree.find_words_with_prefix(prefix)
    return jsonify(cities)

if __name__ == '__main__':
  with open('src/server/cities.txt', encoding="utf8") as file:
    for line in file:
      city_name = line.strip().lower()
      letter_tree.insert(city_name)

    app.run(debug=True)
