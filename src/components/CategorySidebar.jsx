export default function CategorySidebar({ tree, onSelect }) {
  const renderTree = (parentId = null, level = 0) => {
    const nodes = tree[parentId] || []
    return (
      <ul className="space-y-1">
        {nodes.map(node => (
          <li key={node._id}>
            <button
              onClick={() => onSelect(node)}
              className={`w-full text-left px-3 py-2 rounded-md hover:bg-blue-500/10 ${level === 0 ? 'text-white' : 'text-blue-200'} transition`}
            >
              {level > 0 && <span className="mr-2 text-blue-500">•</span>}
              {node.name}
            </button>
            {tree[node._id] && (
              <div className="ml-4 border-l border-blue-500/10 pl-4">
                {renderTree(node._id, level + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <aside className="bg-black/40 border border-blue-500/20 rounded-xl p-4">
      <h3 className="text-white font-semibold mb-3">Categories</h3>
      <div className="max-h-[60vh] overflow-auto pr-1 custom-scroll">
        {renderTree(null)}
      </div>
    </aside>
  )
}
