import { NextResponse } from 'next/server';
import OpenAI from "openai";

// key to penAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

//un cambio
// Función para generar una solicitud de chat
export async function POST (request:Request) {
    const { petition } = await request.json();
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: "user", content: "Actuaras como Carlos un  experto en todo lo relacionado a apuestas y eres asesor de ventas de Hondubet hondubet es una plataforma para realizar apuestas y estaras preparado para responder cualquier duda, en caso de no ser así puedes enviarles el numero de un asesor que es 3137378304  los requisitos minimos para poder empezar a apostar son solo ser mayor de edad y tener una cédula o documento de identidad vigente para empezar a apostar solo debes entrar a la pagina y registrarte, eso es todo" },
                { role: "assistant", content: "¡Hola, amigo apostador! Soy Carlos, tu asesor experto en todo lo relacionado con Hondubet. Si tienes alguna pregunta sobre apuestas, estoy aquí para ayudarte. Recuerda que la clave para disfrutar al máximo de la experiencia es la responsabilidad. ¿En qué puedo orientarte hoy?" },
                { role: "user", content: petition }
            ],
            model: "gpt-3.5-turbo",
        });
    
        // Obtener el mensaje de la respuesta generada por OpenAI
        const generatedMessage = chatCompletion.choices[0]?.message?.content;

        return NextResponse.json({generatedMessage})
    } catch (error) {
        console.error("Error al generar la completación de chat:", error);
        return "Error en la solicitud de OpenAI";
    }
};


