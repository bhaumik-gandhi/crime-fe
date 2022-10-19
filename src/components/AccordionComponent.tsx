import { ReactNode } from 'react';
import Accordion from 'react-bootstrap/Accordion';

type AccordionType = {
  eventKey: string,
  header: string,
  children: ReactNode,
  dataTestId: string,
}

export function AccordionComponent({ eventKey, header, children, dataTestId }: AccordionType) {
  return (
    <Accordion defaultActiveKey="0" data-testid={dataTestId}>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>
          {children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
