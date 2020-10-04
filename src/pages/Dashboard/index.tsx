import React, { useState } from 'react';
import { FiClock } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <Header />

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/50842268?s=400&u=8c904a078bf9ff1bda538ddeb773f770880f12a4&v=4"
                alt="Testando"
              />

              <strong>Mateus Coelho</strong>

              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/50842268?s=400&u=8c904a078bf9ff1bda538ddeb773f770880f12a4&v=4"
                  alt="Testando"
                />

                <strong>Mateus Coelho</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/50842268?s=400&u=8c904a078bf9ff1bda538ddeb773f770880f12a4&v=4"
                  alt="Testando"
                />

                <strong>Mateus Coelho</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/50842268?s=400&u=8c904a078bf9ff1bda538ddeb773f770880f12a4&v=4"
                  alt="Testando"
                />

                <strong>Mateus Coelho</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
