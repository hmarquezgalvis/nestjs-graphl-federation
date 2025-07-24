export class CompanyContext {
  constructor(
    public readonly companyId: string,
    public readonly departmentId: string,
    public readonly branchId: string,
  ) {}

  equals(other: CompanyContext): boolean {
    return (
      this.companyId === other.companyId &&
      this.departmentId === other.departmentId &&
      this.branchId === other.branchId
    );
  }

  toString(): string {
    return `${this.companyId}::${this.departmentId}::${this.branchId}`;
  }
}
