export class CreateTypeDto {
  constructor({ name, description }: { name: string; description: string }) {
    this.name = name;
    this.description = description;
  }

  name: string;
  description: string;
}
