class Person {
  private name: string;
  public age: number;
  readonly log: string; // 읽기 전용

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
