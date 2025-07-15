import { useState, useEffect, useRef, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Machine {
  model: string | null;
  brand: string;
  status: 'new' | 'refurbished' | null;
  category_id: number | null;
  serial_no: string;
}

interface VirtualizedGridProps {
  items: Machine[];
  itemHeight: number;
  containerHeight: number;
  columns: number;
  renderItem: (item: Machine, index: number) => React.ReactNode;
}

export const VirtualizedGrid = ({ 
  items, 
  itemHeight, 
  containerHeight, 
  columns,
  renderItem 
}: VirtualizedGridProps) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate grid dimensions
  const rowHeight = itemHeight;
  const rowsPerPage = Math.ceil(containerHeight / rowHeight);
  const totalRows = Math.ceil(items.length / columns);
  const totalHeight = totalRows * rowHeight;

  // Calculate visible range
  const startRow = Math.floor(scrollTop / rowHeight);
  const endRow = Math.min(startRow + rowsPerPage + 1, totalRows);
  const startIndex = startRow * columns;
  const endIndex = Math.min(endRow * columns, items.length);

  // Get visible items
  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);

  // Handle scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  // Calculate transform for positioning
  const transform = `translateY(${startRow * rowHeight}px)`;

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative',
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: '2rem',
            }}
          >
            {visibleItems.map((item, index) => (
              <div key={`${item.serial_no}-${startIndex + index}`} style={{ height: itemHeight }}>
                {renderItem(item, startIndex + index)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default machine card renderer
export const MachineCard = ({ machine }: { machine: Machine }) => (
  <Card className="machinery-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
    <CardHeader>
      <CardTitle className="text-industrial-dark">{machine.model || "Unknown Model"}</CardTitle>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="w-fit">{machine.brand || "Unknown Brand"}</Badge>
        <Badge className={`w-fit ${machine.status === "new" ? "bg-italian-green" : "bg-industrial-gray"}`}>
          {machine.status === "new" ? "New" : "Used"}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="flex-1">
      <p className="text-sm text-industrial-gray">
        Serial: {machine.serial_no}
      </p>
    </CardContent>
  </Card>
); 