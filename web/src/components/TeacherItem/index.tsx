import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/20051707?s=460&u=56d5e606eace73f70dc773d986a7e83be1d8febc&v=4" alt="Marcelo Cortes" />
                <div>
                    <strong>Marcelo Cortes</strong>
                    <span>Desenvolvimento de Jogos</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de jogos.
      <br /><br />
                Apaixonado por desenvolvimento de jogos mudando a vida das pesseoas através de experiencias.
                Mais de 800 mil pessoas já passaram por uma dessas experiencias
    </p>

            <footer>
                <p>
                    Preço/hora
        <strong>
                        R$ 120,00
        </strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
      </button>
            </footer>
        </article>
    )
}

export default TeacherItem;