"use client"
import { useEffect } from 'react'

const DetailModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-white rounded-lg max-w-3xl w-full p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

                    <div className="prose max-w-none mb-6">
                        <p>{project.description}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Requisitos:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {project.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <h3 className="font-semibold">Duración:</h3>
                            <p>{project.duration}</p>
                        </div>
                        {project.price && (
                            <div>
                                <h3 className="font-semibold">Precio:</h3>
                                <p>{project.price}</p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end space-x-4">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Ver Demo
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                        >
                            Ver Código
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailModal