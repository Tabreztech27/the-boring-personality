import React from 'react';
import { FaStar, FaHeart, FaRegHeart, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import type { ShoppingProduct } from '../data/shoppingData';

export interface ProductCardProps {
  product: ShoppingProduct;
  isWishlisted?: boolean;
  onToggleWishlist?: (id: string) => void;
  onViewProduct?: (product: ShoppingProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted = false,
  onToggleWishlist,
  onViewProduct,
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-[#1f2937] bg-[#0B1120] hover:border-[#8B5CF6]/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#8B5CF6]/15 transition-all duration-300 flex flex-col justify-between">
      {/* Top image */}
      <div className="relative aspect-square overflow-hidden bg-[#111827]">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Gradient shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-black/20" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black shadow-sm">
            {product.discountPercentage}% OFF
          </span>
          {product.isStaffPick && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#8B5CF6] text-white shadow-sm flex items-center gap-1">
              <FaCheckCircle size={9} /> Staff Pick
            </span>
          )}
        </div>

        {/* Wishlist toggle */}
        {onToggleWishlist && (
          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md z-10 ${
              isWishlisted
                ? 'bg-rose-500 text-white scale-110'
                : 'bg-black/60 text-gray-300 hover:text-rose-400'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            {isWishlisted ? <FaHeart size={12} /> : <FaRegHeart size={12} />}
          </button>
        )}

        {/* Store badge */}
        <div className="absolute bottom-2.5 left-3 z-10">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#0B1120]/80 backdrop-blur-xs text-gray-300 border border-white/10">
            {product.store}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1 text-xs">
            <span className="font-semibold text-[#A78BFA]">{product.brand}</span>
            <div className="flex items-center gap-1 text-amber-400">
              <FaStar size={11} />
              <span className="font-bold text-white text-[11px]">{product.rating}</span>
              <span className="text-gray-500 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#C4B5FD] transition-colors line-clamp-2">
            {product.title}
          </h4>

          <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">
            <span className="text-gray-500">Fabric:</span> {product.fabric}
          </p>

          <p className="text-xs text-emerald-400/90 mt-2 bg-emerald-950/30 border border-emerald-900/40 rounded-lg p-2 leading-relaxed">
            💡 {product.whyItWorks}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-[#1f2937] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-white">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[10px] text-gray-400">Includes all taxes</p>
          </div>

          <button
            onClick={() => onViewProduct && onViewProduct(product)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#8B5CF6]/15 hover:bg-[#8B5CF6] text-[#C4B5FD] hover:text-white border border-[#8B5CF6]/30 text-xs font-semibold transition-all duration-200"
          >
            <span>View Deal</span>
            <FaExternalLinkAlt size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
