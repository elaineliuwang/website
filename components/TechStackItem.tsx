export default function TechStackItem({ name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-indigo-500 hover:text-indigo-700"
    >
      {name}
    </a>
  )
}
