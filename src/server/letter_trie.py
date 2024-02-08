class LetterNode:
  def __init__(self):
    self.children = {}
    self.is_end_of_word = False


class SortedLetterTrie:
  def __init__(self):
    self.root = LetterNode()

  def insert(self, word):
    current_node = self.root
    for char in word:
      if char not in current_node.children:
        current_node.children[char] = LetterNode()
      current_node = current_node.children[char]
    current_node.is_end_of_word = True

  def find_words_with_prefix(self, prefix):
    current_node = self.root
    for char in prefix:
      if char not in current_node.children:
        return []
      current_node = current_node.children[char]

    words = []
    self._find_words_from_node(prefix, current_node, words)
    return [word.capitalize() for word in words]

  def _find_words_from_node(self, prefix, node, words):
    if node.is_end_of_word:
      words.append(prefix)
    for char, child_node in sorted(node.children.items()):
      self._find_words_from_node(prefix + char, child_node, words)
