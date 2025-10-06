interface IZodErrorsProps {
  error?: string[];
}

export function ZodErrors({ error }: IZodErrorsProps) {
  if (!error) return null;
  return error.map((err: string, index: number) => (
    <div key={index} className="text-red-700 text-[0.85rem]">
      {err}
    </div>
  ));
}