'use client'

import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import Modal from "@/components/shared/Modal";

export default function Home() {
  return (
    <div>
      <Card color="light" noBorder>
        test card component
      </Card>

      <Modal visible={false}>
        test modal component
      </Modal>

      <Button onClick={()=>console.log('click test')} color="secondary">
        test button component
      </Button>
    </div>
  );
}
