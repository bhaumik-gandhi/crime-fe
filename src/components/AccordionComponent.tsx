import { ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';

type AccordionType = {
  eventKey: string,
  header: string,
  children: ReactNode
}

export function AccordionComponent({ eventKey, header, children }: AccordionType) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
